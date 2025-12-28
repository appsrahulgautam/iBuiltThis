import Image from "next/image";

import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemHeader,
  ItemTitle,
} from "@/components/ui/item";

const models = [
  {
    name: "React.js",
    description: "https://react.dev/",
    image: "/images/reactjs.webp",
  },
  {
    name: "Next.js",
    description: "https://nextjs.org/",
    image: "/images/nextjs.jpeg",
  },
  {
    name: "Typescript",
    description: "https://www.typescriptlang.org/",
    image: "/images/typescript.jpg",
  },
  {
    name: "Tailwind CSS",
    description: "https://tailwindcss.com/",
    image: "/images/tailwindcss.png",
  },
  {
    name: "Postgress SQL",
    description: "https://www.postgresql.org/",
    image: "/images/postgresql.webp",
  },
  {
    name: "Drizzle ORM",
    description: "https://orm.drizzle.team/",
    image: "/images/drizzle.png",
  },
  {
    name: "Neon DB",
    description: "https://neon.com/",
    image: "/images/neon.jpg",
  },
  {
    name: "Vercel",
    description: "https://vercel.com/",
    image: "/images/vercel.webp",
  },
];

export function ItemHeaderDemo() {
  return (
    <div className="flex w-full flex-col gap-6 mt-10">
      <h2>This website uses following tech stack - </h2>
      <ItemGroup className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {models.map((model) => (
          <Item
            key={model.name}
            variant="outline"
            className="animation_popup_style"
          >
            <ItemHeader>
              <Image
                src={model.image}
                alt={model.name}
                width={500}
                height={500}
                className="aspect-square w-full rounded-sm object-cover"
              />
            </ItemHeader>
            <ItemContent>
              <ItemTitle>{model.name}</ItemTitle>
              <ItemDescription className="hidden lg:block line-clamp-4 wrap-anywhere">
                {model.description}
              </ItemDescription>
            </ItemContent>
          </Item>
        ))}
      </ItemGroup>
    </div>
  );
}
