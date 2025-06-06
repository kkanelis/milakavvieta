import pipetava from './assets/image.png'
import { useState } from 'react'
import './App.css'

function App() {
  const [selectedInfo, setSelectedInfo] = useState(null)

  const imagePoints = [
    { id: 1, x: 400, y: 350, info: "Te ir krēsls kur sēž" },
    { id: 2, x: 470, y: 300, info: "Lācis prosta lācis te ir" },
    { id: 3, x: 430, y: 180, info: "Te varbūt upīts dzīvo" },
    { id: 4, x: 830, y: 580, info: "Es jau neko bet tas ir bruģis, dunduk" },
    { id: 5, x: 830, y: 370, info: "NOTEKAS CAURULE" },
    { id: 6, x: 840, y: 110, info: "Te jumts kas sargā riteni" },
    { id: 7, x: 240, y: 110, info: "Koks, drošvien ka egle" },
    { id: 8, x: 200, y: 510, info: "Šitā i zāle" },
  ]

  const handleClick = (id) => {
    setSelectedInfo(selectedInfo === id ? null : id)
  }

  return (
    <>
      <h1>Pīpētava</h1>
      <div className="image-container">
        <div style={{ position: 'relative' }}>
          <img src={pipetava} alt="Interactive image" />
          {imagePoints.map((point) => (
            <div key={point.id} className="button-container">
              <button
                className="image-button"
                style={{
                  position: 'absolute',
                  left: `${point.x}px`,
                  top: `${point.y}px`
                }}
                onClick={() => handleClick(point.id)}
              >
                ?
              </button>
              {selectedInfo === point.id && (
                <div 
                  className="popup-text"
                  style={{
                    position: 'absolute',
                    left: `${point.x + 30}px`,
                    top: `${point.y}px`
                  }}
                >
                  {point.info}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
