/* Reset y tipografía */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

body {
  line-height: 1.6;
  scroll-behavior: smooth;
  background: #f9f9f9;
  color: #333;
}

/* Header fijo */
header {
  background: #4a6fa5;
  color: white;
  padding: 1rem 2rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}

header nav {
  display: flex;
  gap: 1rem;
}

header nav a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

header nav a:hover {
  text-decoration: underline;
}

.menu-toggle {
  display: none;
  font-size: 1.5rem;
  cursor: pointer;
}

/* Secciones */
section {
  padding: 120px 20px 50px;
  max-width: 1000px;
  margin: auto;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease-in-out;
}

section.visible {
  opacity: 1;
  transform: translateY(0);
}

h1, h2 {
  margin-bottom: 1rem;
  color: #2a3d66;
}

p {
  margin-bottom: 1rem;
}

/* Galería */
.gallery {
  display: flex;
  overflow-x: auto;
  gap: 1rem;
  padding-bottom: 1rem;
  scroll-behavior: smooth;
}

.gallery img {
  width: 300px;
  flex-shrink: 0;
  cursor: pointer;
  border-radius: 8px;
  transition: transform 0.3s;
}

.gallery img:hover {
  transform: scale(1.05);
}

/* Lightbox */
#lightbox {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.8);
  justify-content: center;
  align-items: center;
  z-index: 2000;
}

#lightbox img {
  max-width: 90%;
  max-height: 80%;
  border-radius: 10px;
}

#lightbox #close {
  position: absolute;
  top: 20px;
  right: 30px;
  font-size: 2rem;
  color: white;
  cursor: pointer;
}

/* Footer */
footer {
  background: #333;
  color: white;
  text-align: center;
  padding: 1rem;
  margin-top: 2rem;
}

/* Parallax header */
.parallax {
  background: url('images/ermitaheader.jpg') center/cover fixed no-repeat;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.7);
}

/* Responsive */
@media(max-width: 768px) {
  header nav {
    display: none;
    flex-direction: column;
    background: #4a6fa5;
    position: absolute;
    top: 60px;
    right: 0;
    width: 200px;
  }

  .menu-toggle {
    display: block;
  }

  .gallery img {
    width: 80%;
  }
}

/* Map iframe */
iframe {
  width: 100%;
  border: 0;
  border-radius: 8px;
  height: 400px;
  margin-top: 1rem;
}
