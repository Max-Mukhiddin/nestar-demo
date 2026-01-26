import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { NextPage } from "next";
import { useState } from "react";

const Community: NextPage = () => {
  console.log("COMMUNITY COMPONENT - PAGES ROUTING");
  const [title, setTitle] = useState<string>("hello");
  return (
    <div>
      COMMUNITY{""}{" "}
      <button onClick={() => alert("HELLO WORLD")} style={{ margin: "15px" }}>
        PressMe
      </button>
    </div>
  );
};

export default withLayoutBasic(Community);
