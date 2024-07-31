/* eslint-disable react/prop-types */
export default function Checkbox({ title, name, checked, onChange }) {
  return (
    <div className="mb-5 relative">
      <label className="relative">
        <input type="checkbox" name={name} checked={checked} onChange={onChange} />
        <span className="checkbox"></span>
        <span className="text-almostWhite text-lg pl-11">{title}</span>
      </label>
    </div>
  );
}
