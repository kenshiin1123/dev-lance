export default function Container({ children }) {
  // Hide Button
  const hide = true;
  return (
    <div className={`${hide ? "hidden" : "flex"} justify-center items-center`}>
      {children}
    </div>
  );
}
