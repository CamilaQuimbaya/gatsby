import * as React from "react"
import Layout from "../components/layout"
import '../styles/home.css'

import { StaticImage } from "gatsby-plugin-image"


const IndexPage = () => {
  return (
    
    <Layout>
      <div className="myContainer">
      <StaticImage
                src="../images/texto-arriba-blanco.svg"
                alt="Ejemplo de imagen"
                className="z- -1"
                />
      
      {/* Contenido de la página de inicio */}
      <h1 className="text-white text-center  text-6xl mb-8   font-bold">Noticias</h1>
      <div className="container mx-auto mb-4">
          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">

            <div className="myCardHome shadow-lg mb-4">
              <StaticImage
                  src="../images/2.png"
                  alt="Ejemplo de imagen"
                  
                  />
              <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">Título de la Card 3</h2>
              <p className="text-white-700 mb-4">Descripción de la Card 3. Puedes escribir aquí algunos detalles sobre esta card.</p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Botón</button>
              </div>
            </div>

            <div className="myCardHome shadow-lg mb-4">
              <StaticImage
                  src="../images/3.png"
                  alt="Ejemplo de imagen"
                  
                  />
              <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">Título de la Card 3</h2>
              <p className="text-white-700 mb-4">Descripción de la Card 3. Puedes escribir aquí algunos detalles sobre esta card.</p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Botón</button>
              </div>
            </div>

            <div className="myCardHome shadow-lg mb-4">
              <StaticImage
                  src="../images/4.png"
                  alt="Ejemplo de imagen"
                  
                  />
              <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">Título de la Card 3</h2>
              <p className="text-white-700 mb-4">Descripción de la Card 3. Puedes escribir aquí algunos detalles sobre esta card.</p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Botón</button>
              </div>
            </div>


          </div>
      </div>
      </div>

      
    </Layout>
    
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
