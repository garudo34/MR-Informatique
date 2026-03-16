export default function Footer() {
  return (
    <footer className="relative bg-[url('/footer_2.png')] bg-cover bg-center pt-[150px] pb-[15px] text-white">
      {/* overlay pour lisibilité */}

      <div className="relative text-center text-sm px-6 max-w-4xl mx-auto">
        © {new Date().getFullYear()} - MR Informatique. Tous droits réservés.
        SIRET: 893 012 211 00015 | Développé par{' '}
        <a
          href="https://fabien-peyres.fr"
          target="_blank"
          className="underline hover:text-accent transition"
        >
          Fabien Peyres
        </a>
      </div>
    </footer>
  )
}
