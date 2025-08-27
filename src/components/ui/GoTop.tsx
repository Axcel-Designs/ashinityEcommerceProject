export default function GoTop() {
  return (
    <section className="fixed bottom-20 flex justify-end cursor-pointer right-8">
      <div 
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <i className="fa-solid fa-angles-up fa-xl"></i>
      </div>
    </section>
  );
}
