"use client";
import { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import Footer from "../components/Footer";

const AboutUs = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement!.scrollTop = 0;
  });

  return (
    <main>
      <div className="position-relative">
        <section className="section section-lg section-shaped pb-250">
          <div className="shape shape-style-1 bg-gradient-info">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <Container className="py-lg-md d-flex">
            <div className="col px-0">
              <Row>
                <Col lg="12">
                  <div className="d-flex p-4">
                    <div>
                      <div className="icon icon-md icon-shape bg-gradient-white shadow rounded-circle text-info">
                        <i className="ni ni-laptop text-info" />
                      </div>
                    </div>
                    <div
                      className="pl-4 text-white"
                      style={{ textAlign: "justify" }}
                    >
                      <h2 className="display-3 text-white">About Us</h2>
                      <h5 className="display-3 text-white">
                        <u>About Hostel</u>
                      </h5>
                      <h5 className="lead text-white">
                        Welcome to Atul vidyajyot Hostel!
                      </h5>
                      <p>
                        Vidyanagar is a university town near Anand, and
                        thousands of students from around India flood the
                        educational capital of Gujarat to attend some of the
                        most renowned universities. Atul Vidhyajyot Hostel was
                        established in 1995 and completed its silver jubiliee in
                        2022. It provides modern accommodations and an
                        environment for its students to grow spiritually and
                        academically.
                      </p>
                      <br />
                      <p
                        className="text-white"
                        style={{ textAlign: "justify" }}
                      >
                        This all-boys hostel provides free accommodation for
                        students and delicious food in a beautiful campus with
                        lush greenery and tall trees. Rector overlook its
                        administration and strictly remind students to follow
                        basic moral disciplines. Students start their day off
                        with a morning bath befor 7:30 AM and are encouraged to
                        attend daily prayer (prarthna) in the evening. Special
                        cultural programs are held ocassionally while
                        maintaining the discipline of hostel. Recreational
                        facilities provide students with an opportunity to stay
                        fit and healthy while continuing their education.
                      </p>
                      <h5 className="display-3 text-white mt-5">
                        <u>About R. P. Patel (Kaka) - Owner of AVJ Hostel</u>
                      </h5>
                      <div>
                        <h5 className="text-white">
                          Full Name: Ramanbhai Poonambhai Patel{" "}
                        </h5>
                        <h5 className="text-white">
                          17/03/1934 - 01/08/2022 (Birth - Devataj)
                        </h5>
                        <h5 className="text-white">
                          Wife: Savitriben Ramanbhai Patel
                        </h5>
                        <h5 className="text-white">
                          Son: Atulbhai Ramanbhai Patel, Yogeshbhai Ramanbhai
                          Patel, Kamleshbhai Ramanbhai Patel
                        </h5>
                        <br />
                        <p>
                          Mr. R.P. Patel, a gold medalist in B.Com at Sardar
                          Patel University, pursued further studies in Canada,
                          obtaining a CGA degree. Serving a lifetime in the
                          Income Tax Department, he exhibited a remarkable act
                          of patriotism during the 1971 India-Pakistan war by
                          donating his entire salary to the government. <br />
                          <br /> Due to an unfortunate circumstance, Mr. R.P.
                          Patel faced the heart-wrenching loss of his younger
                          son, Atulbhai Patel. In commemoration of his beloved
                          son's memory, he embarked on a noble mission in 1995.
                          Deeply driven by the desire to support underprivileged
                          and intelligent children, he undertook the
                          construction of a hostel named Atul Vidhyajyot in
                          Vallabh Vidhyanagar. Despite the financial challenge,
                          Mr. R.P. Patel dedicatedly shouldered the entire cost
                          of 45 lakhs, even taking a loan against his own home
                          in Canada. <br />
                          <br />
                          Since its inception in 1995 until the present day,
                          Atul Vidhyajyot hostel has been a haven, providing
                          free accommodation to deserving and needy children.
                          The hostel has played a pivotal role in illuminating
                          the future of numerous students, offering them a
                          pathway to a brighter tomorrow. Mr. R.P. Patel's
                          primary goal was to uplift the futures of economically
                          disadvantaged yet intelligent students, showcasing his
                          unwavering commitment to social welfare. <br />
                          <br />
                          A man of high moral character, Mr. R.P. Patel was
                          known for his punctuality and a profound respect for
                          time. His disciplined approach extended to his work
                          and inspired everyone around him to adhere to
                          deadlines. Despite his disciplined demeanor, he
                          possessed a warm and loving nature, occasionally
                          exhibiting a romantic and, when necessary, a stern
                          side. <br /> <br />
                          Mr. R.P. Patel held a deep-seated reverence for
                          soldiers and farmers, reflecting his appreciation for
                          their invaluable contributions to society. Alongside
                          Mr. R.P. Patel, Mr. Bharatbhai Patel has been an
                          instrumental force in the service and guidance
                          provided by the hostel. Presently, Mr. Bharatbhai
                          Patel continues to play a significant role in the
                          hostel's management, contributing substantially to its
                          ongoing development and success.
                        </p>
                      </div>
                      <h5 className="display-3 text-white mt-5">
                        <u>About Bharatbhai A. Patel</u>
                      </h5>
                      <div>
                        <h5 className="text-white">
                          Birth: 02/12/1959, Devataj, Anand.
                        </h5>
                        <h5 className="text-white">
                          Service: Super Class 3 officer, Land Acre Department
                          (1981-2017)
                        </h5>
                        <br />
                        <p>
                          R.P. Patel presented a proposal to build a hostel for
                          underprivileged students in Dewataj village, seeking
                          the support of his brother Rajnibhai Poonambhai Patel
                          and his cousin. The motivation behind this endeavor
                          was to pay tribute to his beloved son. To make this
                          vision possible,Mr. R.P. Patel collaborated with Mr.
                          Bharatbhai Patel, confident that Bharatbhai could
                          execute the project according to their aspirations.
                          <br />
                          <br />
                          Upon Mr. R.P Patels's introduction to Bharat Bhai, the
                          search for suitable land in V.V. Nagar commenced,
                          marking the initiation of the construction process.
                          Eventually, a plot was identified - plot no. 1161,
                          with a decided cost of 5 lakhs rupees in 1995.
                          Throughout every phase of the hostel's construction,
                          Bharat Bhai played a pivotal role, with unwavering
                          support from his brother Rajni Bhai. The construction
                          reached completion in 1995.
                          <br />
                          <br />
                          When it came time to choose a name for the hostel,
                          Ramanbhai entrusted Bharatbhai with the task.
                          Bharatbhai proposed the name "Atul Vidya Jyot", a
                          heartfelt suggestion in honor of R.P. Patel's son,
                          Atul Bhai. The significance of the name encapsulates
                          the essence of the hostel, ensuring that Atulbhai's
                          memory remains forever intertwined with this noble
                          establishment.
                        </p>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
          <div className="separator separator-bottom separator-skew">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </section>
      </div>
      <Footer value={"yes"} />
    </main>
  );
};

export default AboutUs;
