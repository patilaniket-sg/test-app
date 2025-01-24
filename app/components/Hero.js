export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="row d-flex">
          <div className="col-md-8">
            <h1>Buy Memes.<br /> In Two Clicks.</h1>
            <p>The fastest way to buy memes in just two clicks. <br /> Under 1 minute to sign up and no wallet needed. </p>
            <div className="d-flex gap-3 mt-4">
              <div className="flex-grow-1">
                <h4><img src="images/icon4.png" alt="" /> Total users</h4>
                <h3><img src="images/users.png" alt="users" /> 52,630</h3>
              </div>
              <div className="flex-grow-1">
                <h4><img src="images/icon4.png" alt="" /> Trade volume</h4>
                <h3>$1,288,314,266</h3>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="virtual-card">
              <img src="images/img.png" alt="VIRTUAL" />
              <div>
                <h3 className="d-flex justify-content-between">VIRTUAL <span>▲ 0.59%</span></h3>
                <div className="d-flex justify-content-between mt-2">
                  <span className="p-text">Price <b>$2.74</b></span>
                  <span className="p-text">Market Cap <b>$1.7B</b></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}