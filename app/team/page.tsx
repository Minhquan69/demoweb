import React from "react";
import Link from "next/link";
import PageBanner from "../components/PageBanner";
import { TEAM_PAGE } from "../data/team";

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
              {TEAM_PAGE.map((member, i) => (
                <div
                  key={i}
                  className="col-lg-3 col-sm-6"
                  data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
                  data-aos-delay={150 + (i % 4) * 50}
                >
                  <div className="single-team">
                    <div className="team-img">
                      <Link href="/team"><img src={`/assets/images/team/members/${member.avatar}`} alt={member.name} /></Link>
                    </div>
                    <div className="team-content">
                      <h3 className="name">
                        <Link href="/team">
                          {member.name.split(" ").length > 1 ? (
                            <>
                              {member.name.split(" ")[0]} <br /> {member.name.split(" ").slice(1).join(" ")}
                            </>
                          ) : (
                            member.name
                          )}
                        </Link>
                      </h3>
                      <span className="designation">
                        {member.roleVi != null && member.roleEn != null && (
                          <>
                            <span data-lang="vi">{member.roleVi}</span>
                            <span data-lang="en">{member.roleEn}</span>
                            <span className="d-block" />
                          </>
                        )}
                        <span data-lang="vi">{member.degreeVi}</span>
                        <span data-lang="en">{member.degreeEn}</span>
                      </span>
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
