export interface IOptionsProps {
  onPremiumChange(val: boolean): void;
  onFastChange(val: boolean): void;
}

export function Options(props: IOptionsProps) {
  return (
    <div className="options">
      <input
        type="checkbox"
        name="premium"
        onChange={(e) => props.onPremiumChange(e.target.checked)}
      />
      <label htmlFor="premium">premium</label>

      <br></br>

      <input
        type="checkbox"
        name="fast"
        onChange={(e) => props.onFastChange(e.target.checked)}
      />
      <label htmlFor="fast">fast</label>
    </div>
  );
}
