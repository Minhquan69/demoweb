import React from "react";
import Link from "next/link";
import PageBanner from "../components/PageBanner";

const TEAM = [
  { name: "Andrew Max Fetcher", img: "team-1.jpg" },
  { name: "Arnold human", img: "team-2.jpg" },
  { name: "Mike Holder", img: "team-3.jpg" },
  { name: "Joakim Ken", img: "team-4.jpg" },
  { name: "Michael Frater", img: "team-1.jpg" },
  { name: "Kevin Perry", img: "team-2.jpg" },
  { name: "Michael Frater", img: "team-3.jpg" },
  { name: "Steven Smith", img: "team-4.jpg" },
];

export default function TeamPage() {
  return (
    <>
      <PageBanner
        title={<><span data-lang="vi">Đội ngũ</span><span data-lang="en">Our Team</span></>}
        breadcrumbCurrent={<><span data-lang="vi">Đội ngũ</span><span data-lang="en">Our Team</span></>}
      />
      <div className="section techwix-team-section techwix-team-section-03 section-padding">
        <div className="container">
          <div className="team-wrap">
            <div className="row">
              {TEAM.map((member, i) => (
                <div key={i} className="col-lg-3 col-sm-6">
                  <div className="single-team">
                    <div className="team-img">
                      <Link href="/team"><img src={`/assets/images/team/${member.img}`} alt="" /></Link>
                    </div>
                    <div className="team-content">
                      <h3 className="name"><Link href="/team">{member.name.split(" ").length > 1 ? <>{member.name.split(" ")[0]} <br /> {member.name.split(" ").slice(1).join(" ")}</> : member.name}</Link></h3>
                      <span className="designation">iVista Tech</span>
                      <div className="team-social">
                        <ul className="social">
                          <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                          <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                          <li><a href="#"><i className="fab fa-dribbble"></i></a></li>
                          <li><a href="#"><i className="fab fa-behance"></i></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
