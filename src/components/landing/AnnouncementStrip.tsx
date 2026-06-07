const AnnouncementStrip = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="fixed top-0 w-full z-50 flex items-center justify-center bg-primary text-primary-foreground"
      style={{ height: 44, fontSize: 13, fontWeight: 500 }}
    >
      <span>
        ✦ Lanserer i Norge – de 50 første kundene får 3 måneder gratis.{" "}
        <button onClick={() => scrollTo("signup")} className="underline hover:opacity-80 transition-opacity">
          Les mer →
        </button>
      </span>
    </div>
  );
};

export default AnnouncementStrip;
