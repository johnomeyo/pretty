export const SearchSuggestion = (props) => {
  let suggestionItems = props.suggestions.map((suggestionItem, index) => (
    <p key={index}> {suggestionItem}</p>
  ));
  return <div className="search-suggestions">{suggestionItems}</div>;
};
