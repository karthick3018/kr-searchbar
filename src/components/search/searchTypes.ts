type propTypes = {
  name: string;
  placeholder?: string;
  type?: string;
  value: string | number;
  onChange: (e) => void;
};
type searchQuery = number | string;

export { propTypes, searchQuery };
