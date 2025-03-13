import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setActiveTab } from "@/store/tabsSlice";
import Heading from "./Heading";
import Paragraph from "./Paragraph";

/**
 * Tabs component that displays a list of tabs and their content.
 * 
 * This component uses Redux for state management and react-router's useSearchParams
 * for handling query parameters in the URL.
 * 
 * @component
 * @example
 * return (
 *   <Tabs />
 * )
 * 
 * @returns {JSX.Element} The rendered Tabs component.
 */
const Tabs = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const { tabs, activeTab } = useSelector((state) => state.tabs);

  useEffect(() => {
    dispatch({ type: "tabs/fetchTabs" });
  }, [dispatch]);

  useEffect(() => {
    const tabIndex = searchParams.get("tab");
    if (tabIndex !== null) {
      dispatch(setActiveTab(Number(tabIndex)));
    }
  }, [searchParams, dispatch]);

  const handleTabClick = (index) => {
    dispatch(setActiveTab(index));
    setSearchParams({ tab: index });
  };

  return (
    <div>
      <div className="flex justify-center mt-6">
        <div className="flex border border-gray-200 rounded-lg">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`px-6 py-3 border-b-4 ${
                activeTab === index
                  ? "text-black border-blue-500 cursor-default"
                  : "text-gray-400 border-gray-200 border-b-transparent hover:text-black cursor-pointer"
              } ${
                index !== tabs.length - 1 ? "border-r border-r-gray-200" : ""
              } focus:outline-none`}
              onClick={() => handleTabClick(index)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <div className="p-4 mt-4">
        {tabs[activeTab] && (
          <div>
            <Heading text={tabs[activeTab].label} />
            <Paragraph text={tabs[activeTab].description} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
