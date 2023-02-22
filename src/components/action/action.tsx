/* eslint-disable jsx-a11y/anchor-is-valid */
export function Action({ ...props }) {
  return (
    <>
      <a href="#" onClick={props.handle} className={props.class}>
        {props.name}
      </a>
    </>
  );
}
