import "./css/Midsection.css";
import pic1 from "./assets/images/pic1.jpeg";
import pic2 from "./assets/images/pic2.jpeg";
import pic3 from "./assets/images/pic3.jpeg";
export default function Midsection() {
  return (
    <>
      <div className="build-banner">
        <div>Let's build something great</div>
      </div>
      {window.innerWidth >= 600 ? (
        <div className="grid-container">
          <div className="grid">
            <div className="img-container l">
              <div className="img-text">
                Lorem ipsum dolor sit amet consectetur.
              </div>
              <img src={pic1} alt="no_img" />
            </div>
            <First />
            <Second />
            <div className="img-container r">
              <div className="img-text">
                Lorem ipsum dolor sit amet consectetur.
              </div>
              <img src={pic2} alt="no_img" />
            </div>
            <div className="img-container l">
              <div className="img-text">
                Lorem ipsum dolor sit amet consectetur.
              </div>
              <img src={pic3} alt="no_img" />
            </div>
            <Third />
          </div>
        </div>
      ) : (
        <Mobilemidsec />
      )}
    </>
  );
}

function First() {
  return (
    <div className="first-wrapper">
      <div className="first">
        <div className="topic">Random</div>
        <div className="heading">Lorem ipsum dolor sit amet consectetur.</div>
        <div className="content">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident
            est aliquid eaque suscipit a ea repudiandae accusamus doloribus
            minima dolores?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            fugiat enim harum aspernatur aperiam neque eum ea placeat quasi
            maiores?
          </p>
        </div>
        <div className="btn-1-wrapper">
          <button className="btn-1">Lorem, ipsum dolor</button>
        </div>
        <div className="btn-2-wrapper">
          <button className="btn-2">Lorem dolor sit amet</button>
        </div>
      </div>
    </div>
  );
}

function Second() {
  return (
    <div className="second-wrapper">
      <div className="second">
        <div className="topic">Random</div>
        <div className="heading">Lorem ipsum dolor sit amet consectetur.</div>
        <div className="content">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident
            est aliquid eaque suscipit a ea repudiandae accusamus doloribus
            minima dolores?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            fugiat enim harum aspernatur aperiam neque eum ea placeat quasi
            maiores?
          </p>
        </div>
        <div className="btn-1-wrapper">
          <button className="btn-1">Lorem, ipsum dolor</button>
        </div>
      </div>
    </div>
  );
}

function Third() {
  return (
    <div className="third-wrapper">
      <div className="third">
        <div className="topic">Random</div>
        <div className="heading">Lorem ipsum dolor sit amet consectetur.</div>
        <div className="content">
          <div className="sub-topic-1">
            <div className="sub-heading">Lorem ipsum dolor </div>
            <div className="sub-content">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
              eos obcaecati non totam sequi. Saepe!
            </div>
          </div>
          <div className="sub-topic-2">
            <div className="sub-heading">Lorem ipsum dolor </div>
            <div className="sub-content">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
              eos obcaecati non totam sequi. Saepe!
            </div>
          </div>
          <div className="sub-topic-3">
            <div className="sub-heading">Lorem ipsum dolor </div>
            <div className="sub-content">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
              eos obcaecati non totam sequi. Saepe!
            </div>
          </div>
          <div className="sub-topic-4">
            <div className="sub-heading">Lorem ipsum dolor </div>
            <div className="sub-content">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
              eos obcaecati non totam sequi. Saepe!
            </div>
          </div>
        </div>
        <div className="btn-1">Lorem, ipsum dolor.</div>
      </div>
    </div>
  );
}

function Mobilemidsec() {
  return (
    <>
      <div className="grid-container-mob">
        <div className="grid-mob">
          <div className="img-container l">
            <div className="img-text">
              Lorem ipsum dolor sit amet consectetur.
            </div>
            <img src={pic1} alt="no_img" />
          </div>
          <First />
          <div className="img-container r">
            <div className="img-text">
              Lorem ipsum dolor sit amet consectetur.
            </div>
            <img src={pic2} alt="no_img" />
          </div>
          <Second />
          <div className="img-container l">
            <div className="img-text">
              Lorem ipsum dolor sit amet consectetur.
            </div>
            <img src={pic3} alt="no_img" />
          </div>
          <Third />
        </div>
      </div>
    </>
  );
}
