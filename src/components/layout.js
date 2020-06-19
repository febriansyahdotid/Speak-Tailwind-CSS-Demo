import { Link } from "gatsby"
import Logo from "../../content/assets/sekaidotid-logo-white-web.png"
import React from "react"

const Layout = ({ location, title, children }) => {
  let header

  header = (
    <div className="flex flex-wrap items-center justify-between p-6 border shadow-lg bg-sekai">
      <div className="flex items-center flex-shrink-0 mr-6 shadow-none logo">
        <Link to={`/`}>
          <img src={Logo} alt="SEKAI.ID Logo" />
        </Link>
      </div>
      <div className="flex-grow block w-full shadow-none lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <a
            href="https://twitter.com/sekaidotid"
            className="block mt-4 mr-4 text-white lg:inline-block lg:mt-0 hover:text-white"
          >
            Twitter
          </a>
          <a
            href="https://facebook.com/sekaidotid"
            className="block mt-4 mr-4 text-white lg:inline-block lg:mt-0 hover:text-white"
          >
            Facebook
          </a>
          <a
            href="https://instagram.com/sekaidotid"
            className="block mt-4 mr-4 text-white lg:inline-block lg:mt-0 hover:text-white"
          >
            Instagram
          </a>
          <a
            href="https://t.me/sekaidotid_grup"
            className="block mt-4 mr-4 text-white lg:inline-block lg:mt-0 hover:text-white"
          >
            Telegram
          </a>
          <a
            href="https://gitlab.com/sekaidotid"
            className="block mt-4 mr-4 text-white lg:inline-block lg:mt-0 hover:text-white"
          >
            GitLab
          </a>
        </div>
      </div>
    </div>
  )

  return (
    // <div className="bg-sekai">
    <div className="max-w-3xl px-5 py-5 mx-auto bg-white border-2 rounded-lg shadow-xl">
      <header>{header}</header>
      <main>{children}</main>
      <footer className="mt-8 text-lg">
        <div className="font-bold">
          Surat Elektronik : sekaidotid(at)outlook.com
        </div>
        © 2018 - {new Date().getFullYear()} SEKAI.ID, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a> <br />
        <a href="https://s.sekai.id/git-web">Source Code on GitLab</a>
      </footer>
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      ></script>
    </div>
    // </div>
  )
}

export default Layout
