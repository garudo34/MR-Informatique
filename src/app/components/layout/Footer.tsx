export default function Footer() {
  return (
    <footer className="bg-primary relative pt-5 pb-3.75 text-white lg:bg-transparent lg:pt-37.5">
      {/* Background image uniquement en md+ */}
      <div className="absolute inset-0 hidden bg-[url('/footer_2.png')] bg-cover bg-center lg:block" />

      <div className="relative z-10 text-center text-sm lg:text-base">
        © {new Date().getFullYear()} - MR Informatique. Tous droits réservés.
        SIRET: 893 012 211 00015 | Développé par{' '}
        <a
          href="https://fabien-peyres.fr"
          target="_blank"
          className="hover:text-accent underline transition"
        >
          Fabien Peyres
        </a>
      </div>
    </footer>
  )
}
