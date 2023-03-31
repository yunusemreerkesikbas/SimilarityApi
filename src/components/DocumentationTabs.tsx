"use client";

import { FC } from "react";
import SimpleBar from "simplebar-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/Tabs";
import Code from "./Code";
import { nodejs } from "@/helpers/documentation-code";

const DocumentationTabs: FC = () => {
  return (
    <Tabs defaultValue="nodejs" className="max-w-2xl w-full">
      <TabsList>
        <TabsTrigger value="nodejs">NodeJS</TabsTrigger>
        <TabsTrigger value="python">Python</TabsTrigger>
      </TabsList>
      <TabsContent value="nodejs">
        <SimpleBar></SimpleBar>
        <Code language="javascript" code={nodejs} show animated></Code>
      </TabsContent>
      <TabsContent value="python">
        <Code language="python" code={nodejs} show animated></Code>
      </TabsContent>
    </Tabs>
  );
};

export default DocumentationTabs;
