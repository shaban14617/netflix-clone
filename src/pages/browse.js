import BrowseContainer from "../containers/browse";
import { useContent } from "../hooks";
import selectionFilter from "../utils/selection-filter";

export default function Browse() {
  const { films } = useContent("films");
  const { series } = useContent("series");
  const slides = selectionFilter({ series, films });
  console.log(slides);

  return <BrowseContainer slides={slides} />;
}
