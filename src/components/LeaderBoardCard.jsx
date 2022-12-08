import React from "react";

export default function LeaderBoardCard({
  img = "https://www.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg",
  title = "Rune raises $100,000 for marketing through NFT butterflies sale",
  author = "ninjanft",
  like = "254",
}) {
  return (
    <>
      <td className="flex items-center gap-2 ">
        <img className="w-[120px] h-[60px] rounded" src={img} alt="" />
        <p>{title}</p>
      </td>
      <td className="pl-14">{author}</td>

      <td className="">{like}</td>
    </>
  );
}
