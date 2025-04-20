export default function Article({ children }) {
  return (
    <article
      className="text-white mx-auto flex flex-col items-center justify-center gap-10 mt-9 text-center"
      style={{ fontFamily: "Junge" }}
    >
      {children}
    </article>
  );
}
