import React from 'react'
import '../styles/Home.css'
const Home = () => {

  return (
    <div>
      <>
        <main>
          <nav className="search">
            <ul>
              <li>
                <a href="/allrecipe" className="btn">Explore Recipes</a>
              </li>
              <li>
                <a href="/createrecipe" className="btn">Add a Recipe </a>
              </li>
            </ul>
          </nav>

          <section className="featured">
            <h1>Featured</h1>
            <div className="cards">
              <a href="/blog" className="card card-1">
                <article>
                  <img src="https://media.istockphoto.com/id/1081422898/photo/pan-fried-duck.jpg?s=612x612&w=0&k=20&c=kzlrX7KJivvufQx9mLd-gMiMHR6lC2cgX009k9XO6VA=" alt="Food" />
                  <div className="tag-1">Article</div>
                  <div className="comments">
                    <span className="far fa-comment"></span>
                    42
                  </div>
                  <h2>Insights from the esteemed culinary maestro, Ranveer Brar</h2>
                </article>
              </a>
              <a href="#" className="card card-2">
                <article>
                  <img src="https://i.ibb.co/nDjPnYT/2.jpg" alt="Food" />
                  <div className="tag-1">Recipe</div>
                  <div className="comments">
                    <span className="far fa-comment"></span>
                    8
                  </div>
                  <h2>Experience the beauty of Greek Cuisine</h2>
                </article>
              </a>
              <a href="#" className="card card-3">
                <article>
                  <img src="https://i.ibb.co/dtdTFK9/3.jpg" alt="Food" />
                  <div className="tag-1">Article</div>
                  <div className="comments">
                    <span className="far fa-comment"></span>
                    13
                  </div>
                  <h2>Learn Baking Cakes and Bread</h2>
                </article>
              </a>
              <a href="#" className="card card-4">
                <article>
                  <img src="https://i.ibb.co/PryN0m3/4.jpg" alt="Food" />
                  <div className="tag-1">Video</div>
                  <span className="fas fa-play-circle"></span>
                </article>
              </a>
            </div>
          </section>

          <aside className="ad-1">
            <h1>Never miss another recipe</h1>
            <a href="/login" className="btn">Sign up</a>
          </aside>

          <div className="mid-area">
            <section className="latest">
              <h1>Latest Articles</h1>
              <div className="cards">
                <a href="#" className="card">
                  <article>
                    <div className="img-container">
                      <img src="https://i.ibb.co/Bz5gs6F/5.jpg" alt="Food" />
                    </div>
                    <div className="description">
                      <header>
                        <div className="tag-2">Article</div>
                        <h2>Healthy Greek Salad.</h2>
                      </header>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti reiciendis nisi veritatis cum
                        magni! Maiores voluptatum ...
                      </p>
                      <footer>
                        <div>
                          By Ranveer, 2h ago
                        </div>
                        <div>
                          <span className="far fa-comment"></span> 8
                          <span className="far fa-clock"></span> 5 min.
                        </div>
                      </footer>
                    </div>
                  </article>
                </a>
                <a href="#" className="card">
                  <article>
                    <div className="img-container">
                      <img src="https://i.ibb.co/K52cn8p/6.jpg" alt="Food" />
                    </div>
                    <div className="description">
                      <header>
                        <div className="tag-2">Article</div>
                        <h2>Peach Delight.</h2>
                      </header>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti reiciendis nisi veritatis cum
                        magni! Maiores voluptatum delectus odio ...
                      </p>
                      <footer>
                        <div>
                          By John, 5h ago
                        </div>
                        <div>
                          <span className="far fa-comment"></span> 22
                          <span className="far fa-clock"></span> 6 min.
                        </div>
                      </footer>
                    </div>
                  </article>
                </a>
                <a href="#" className="card">
                  <article>
                    <div className="img-container">
                      <img src="https://i.ibb.co/xJ83nRC/7.jpg" alt="Food" />
                    </div>
                    <div className="description">
                      <header>
                        <div className="tag-2">Article</div>
                        <h2>Italian Cuisine.</h2>
                      </header>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti reiciendis nisi veritatis cum
                        magni! Maiores voluptatum delectus odio ...
                      </p>
                      <footer>
                        <div>
                          By Dias, yesterday
                        </div>
                        <div>
                          <span className="far fa-comment"></span> 10
                          <span className="far fa-clock"></span> 8 min.
                        </div>
                      </footer>
                    </div>
                  </article>
                </a>
                <a href="#" className="card">
                  <article>
                    <div className="img-container">
                      <img src="https://i.ibb.co/xYzgxhJ/8.jpg" alt="Food" />
                    </div>
                    <div className="description">
                      <header>
                        <div className="tag-2">Article</div>
                        <h2>Mediterranean platter.</h2>
                      </header>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti reiciendis nisi veritatis cum
                        magni! Maiores voluptatum delectus odio ...
                      </p>
                      <footer>
                        <div>
                          By Atharva, yesterday
                        </div>
                        <div>
                          <span className="far fa-comment"></span> 42
                          <span className="far fa-clock"></span> 6 min.
                        </div>
                      </footer>
                    </div>
                  </article>
                </a>
                <a href="#" className="card">
                  <article>
                    <div className="img-container">
                      <img src="https://i.ibb.co/LP6MV7L/9.jpg" alt="Food" />
                    </div>
                    <div className="description">
                      <header>
                        <div className="tag-2">Article</div>
                        <h2>Coffee & Waffles</h2>
                      </header>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti reiciendis nisi veritatis cum
                        magni! Maiores voluptatum delectus odio ...
                      </p>
                      <footer>
                        <div>
                          By Josh, yesterday
                        </div>
                        <div>
                          <span className="far fa-comment"></span> 15
                          <span className="far fa-clock"></span> 7 min.
                        </div>
                      </footer>
                    </div>
                  </article>
                </a>
              </div>
            </section>
            <div className="sidebar">
              <section className="popular">
                <h1>Popular Recipes</h1>
                <ul>
                  <li>
                    <a href="#">
                      <article>
                        <img src="https://i.ibb.co/qyj59nM/10.jpg" alt="Food" />
                        <div className="description">
                          <div className="tag-2">Recipe</div>
                          <h2>Spaghetti and Hot Dogs.</h2>
                          <div className="stars">
                            <span className="fas fa-star"></span> 4.8
                          </div>
                        </div>
                      </article>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <article>
                        <img src="https://i.ibb.co/sgjsbjY/11.jpg" alt="Food" />
                        <div className="description">
                          <div className="tag-2">Recipe</div>
                          <h2>Steak and Fries.</h2>
                          <div className="stars">
                            <span className="fas fa-star"></span> 4.4
                          </div>
                        </div>
                      </article>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <article>
                        <img src="https://i.ibb.co/DwXPpmk/12.jpg" alt="Food" />
                        <div className="description">
                          <div className="tag-2">Recipe</div>
                          <h2>Rissoto served with greek salad</h2>
                          <div className="stars">
                            <span className="fas fa-star"></span> 4.7
                          </div>
                        </div>
                      </article>
                    </a>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </main>
        <footer className="site-footer">
          <div className="wrapper">
            <section>
              <p>Elevate your cooking game with our recipe website, your go-to source for curated recipes, cooking tips, and a vibrant community of fellow food enthusiasts</p>
            </section>
            <section>
              <h1>Explore</h1>
              <ul>
                <li>Recipes</li>
                <li>Articles</li>
                <li>Videos</li>
              </ul>
            </section>
            <section>
              <h1>About</h1>
              <ul>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </section>
            <section>
              <h1>Legal</h1>
              <ul>
                <li>Terms</li>
                <li>Privacy</li>
              </ul>
            </section>
          </div>
          <small>&copy; Copyright 2023, Atharva Bilonikar</small>
        </footer>
      </>
    </div>
  )
}

export default Home;