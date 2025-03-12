import { TabsContent } from "@/components/ui/tabs";

const TabContent = ({ value, children }) => (
  <TabsContent value={value} className="mt-4">
    {children}
  </TabsContent>
);

export default TabContent;
