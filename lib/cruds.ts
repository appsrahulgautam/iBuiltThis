"use server";

import { db } from "@/db";
import { products } from "@/db/schema";
import { desc, eq, ilike } from "drizzle-orm";
import { connection } from "next/server";
import { MyFormState } from "./types/types";
import { zodValidationsForProducts } from "./zod-validations";
import { revalidatePath } from "next/cache";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function getAllProductswithFilteration({
  searchText,
  filterBy,
}: {
  searchText: string;
  filterBy: string;
}) {
  await connection();

  try {
    const productslist =
      searchText.trim().length > 0
        ? filterBy == "Trending"
          ? await db
              .select()
              .from(products)
              .where(ilike(products.name, "%" + searchText + "%"))
              .orderBy(desc(products.voteCount))
          : await db
              .select()
              .from(products)
              .where(ilike(products.name, "%" + searchText + "%"))
              .orderBy(desc(products.createdAt))
        : filterBy == "Trending"
        ? await db.select().from(products).orderBy(desc(products.voteCount))
        : await db.select().from(products).orderBy(desc(products.createdAt));

    console.log(productslist.length + " products found");

    return { productslist: productslist };
  } catch (error) {
    return { productslist: null };
  }
}
///GET
export async function getFeaturedProducts() {
  await connection; ///todo <----- good practice add it before connection requests in db
  const productsselect = await db
    .select()
    .from(products)
    .where(eq(products.status, "approved"))
    .orderBy(desc(products.voteCount));
  return productsselect;
}

//GET
export async function getRecentlyLaunched() {
  // const sevenDaysAgo = new Date();
  // sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

  // //todo gt means greater then
  // const recentProducts = await db
  //   .select()
  //   .from(products)
  //   .where(gt(products.createdAt, sevenDaysAgo))
  //   .orderBy(desc(products.createdAt));

  // return recentProducts;

  await connection;
  //todo another way of doing above thing
  const allproducts = await db.select().from(products);

  const oneweekago = new Date();
  oneweekago.setDate(oneweekago.getDate() - 7);

  return allproducts.filter(
    (product) =>
      product.createdAt &&
      new Date(product.createdAt.toISOString()) >= oneweekago
  );
}

//POST
export async function submitProject(
  prevState: MyFormState,
  formdata: FormData
) {
  await connection();

  //todo step 1 ->
  //todo lets get the user id from our own auth system and check if its authenticated
  const session = await getServerSession(authOptions);

  if (!session) {
    return {
      success: false,
      error: "Not logged in",
      message: "You need to re-login.",
    };
  }
  if (!session.user) {
    return {
      success: false,
      error: "Not logged in",
      message: "You need to re-login.",
    };
  }

  if (!session.user.id) {
    return {
      success: false,
      error: "Not logged in",
      message: "You need to re-login.",
    };
  }

  const userId  = session.user.id;

  try {
    console.log(formdata.get("name"));

    //todo step 2 ->
    //todo get raw form data
    const rawDataForm = Object.fromEntries(formdata.entries());

    //todo step 3->
    //todo create a zod object to validate it
    const validatedData = zodValidationsForProducts.safeParse(rawDataForm);
    if (!validatedData.success) {
      console.log("Zod validation errors:", validatedData.error);
      return {
        success: false,
        error: "Invalid data sent",
        message: "Check if you have entered the correct data",
      };
    }

    //todo step --> 4
    //todo insert data to database (these destructured values comes from zod validation keys)
    //todo must matcth the keys of product schema
    const { name, slug, tagline, description, websiteurl, tags } =
      validatedData.data;

    //transform the data
    await db.insert(products).values({
      name,
      slug,
      tagline,
      description,
      websiteurl,
      tags: tags,
      status: "pending",
      submittedBy: userId,
      organizationId: userId,
      userId,
    });

    return {
      success: true,
      message: "Product submitted successfully! It will be reviewed shortly.",
      errors: undefined,
    };
  } catch (error) {
    return {
      success: false,
      error: "Not logged in",
      message: "You need to re-login.",
    };
  }
}

export async function upvoteCount(productId: number, VoteCount: number) {
  await connection();

  try {
     const session = await getServerSession(authOptions);

    if (!session) {
      return {
        success: false,
        error: "Not logged in",
        message: "You need to re-login.",
      };
    }
    if (!session.user) {
      return {
        success: false,
        error: "Not logged in",
        message: "You need to re-login.",
      };
    }

    if (!session.user.id) {
      return {
        success: false,
        error: "Not logged in",
        message: "You need to re-login.",
      };
    }


    await db
      .update(products)
      .set({
        voteCount: VoteCount + 1,
      })
      .where(eq(products.id, productId));

    console.log("Upvote has been done successfully");

    revalidatePath("/");

    return {
      success: true,
      message: "Upvote has been done successfully",
      error: "",
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Unable to Upvote",
      error: "Unable to Upvote",
    };
  }
}

export async function downvoteCount(productId: number, VoteCount: number) {
  await connection();

  try {
     const session = await getServerSession(authOptions);

    if (!session) {
      return {
        success: false,
        error: "Not logged in",
        message: "You need to re-login.",
      };
    }
    if (!session.user) {
      return {
        success: false,
        error: "Not logged in",
        message: "You need to re-login.",
      };
    }

    if (!session.user.id) {
      return {
        success: false,
        error: "Not logged in",
        message: "You need to re-login.",
      };
    }


    await db
      .update(products)
      .set({
        voteCount: VoteCount - 1,
      })
      .where(eq(products.id, productId));

    console.log("Upvote has been done successfully");

    revalidatePath("/");

    return {
      success: true,
      message: "Upvote has been done successfully",
      error: "",
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Unable to Upvote",
      error: "Unable to Upvote",
    };
  }
}

export async function getProductDetails(productId: number) {
  await connection();
  try {
    const singleproduct = await db
      .select()
      .from(products)
      .where(eq(products.id, productId));

    return {
      success: true,
      error: "",
      message: "Product details fetched successfully",
      product: singleproduct?.[0] ?? null,
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      error: "Unable to fetch details of product",
      message: "Unable to fetch details of product",
    };
  }
}
