/**
 * TabsPage component renders a page with a secondary heading, a main heading,
 * a paragraph, and a Tabs component.
 *
 * @component
 * @example
 * return (
 *   <TabsPage />
 * )
 */
import Heading from "@/components/Heading";
import HeadingSecondary from "@/components/HeadingSecondary";
import Paragraph from "@/components/Paragraph";
import Tabs from "@/components/Tabs";

const TabsPage = () => {
  return (
    <div className="container mx-auto p-8">
      <HeadingSecondary text="LOREM IPSUM DOLOR SIT AMET" />
      <Heading text="consectetur adipiscing elit" />
      <Paragraph text="Donec suscipit ex eu faucibus laoreet. Nulla non neque mauris. Quisque molestie aliquam sem eget mattis. Suspendisse vehicula nisl non quam imperdiet fringilla. Sed sodales ante vel lectus vestibulum." />
      <Tabs />
    </div>
  );
};

export default TabsPage;
