import Star from "./Star";

interface StartProps {
  count: number;
}

export default function Start({ count }: StartProps): JSX.Element | null {
  if (count < 1 || count > 5) {
    return null;
  }

  const arr: undefined[] = new Array(count).fill(undefined);

  return (
    <ul className="card-body-stars u-clearfix">
      {arr.map((_, index) => <Star key={index} />)}
    </ul>
  );
}