function AttributePickerItem({ name, children, onOptionChange }) {
  return (
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
      <input type="radio" name={name} value={children} onChange={onOptionChange} /> &nbsp;
      {children}
    </span>
  );
}

export default AttributePickerItem;
