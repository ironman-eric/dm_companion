import AttributePickerItem from './AttributePickerItem';

function AttributePicker({ name, items, onOptionChange }) {
  return (
    items.map(item =>
      <AttributePickerItem name={name} key={item} onOptionChange={onOptionChange}>{item}</AttributePickerItem>
    )
  );
}

export default AttributePicker;
