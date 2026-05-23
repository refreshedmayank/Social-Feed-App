function Feedcard(props: { Image: string; Caption: string }) {
  return (
    <div>
      <div className="border p-8">
        <img className="" src={props.Image} alt={props.Caption} />
        <span>{props.Caption}</span>
      </div>
    </div>
  );
}

export default Feedcard;