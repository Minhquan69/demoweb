export type TeamMember = {
  name: string;
  degreeVi: string;
  degreeEn: string;
  avatar: string; // relative to /assets/images/team/members/
};

export const TEAM: TeamMember[] = [
  {
    name: "Đỗ Văn Tuấn",
    degreeVi: "Tiến sĩ",
    degreeEn: "PhD",
    avatar: "DoVanTuan.jpg",
  },
  {
    name: "Tô Việt Anh",
    degreeVi: "Đại học",
    degreeEn: "Bachelor",
    avatar: "ToVietAnh.jpg",
  },
  {
    name: "Nguyễn Thị Ngọc",
    degreeVi: "Đại học",
    degreeEn: "Bachelor",
    avatar: "avatar_default.jpg",
  },
  {
    name: "Trần Văn Vượng",
    degreeVi: "Đại học",
    degreeEn: "Bachelor",
    avatar: "TranVanVuong.jpg",
  },
  {
    name: "Nguyễn Thành Nam",
    degreeVi: "Đại học",
    degreeEn: "Bachelor",
    avatar: "avatar_default.jpg",
  },
  {
    name: "Nguyễn Danh Tuyên",
    degreeVi: "Đại học",
    degreeEn: "Bachelor",
    avatar: "NguyenDanhTuyen.jpg",
  },
  {
    name: "Bùi Đoàn Quang Hưng",
    degreeVi: "Đại học",
    degreeEn: "Bachelor",
    avatar: "BuiDoanQuangHung.jpg",
  },
  {
    name: "Phan Thành Toàn",
    degreeVi: "Tiến sĩ",
    degreeEn: "PhD",
    avatar: "avatar_default.jpg",
  },
  {
    name: "Kiều Thanh Bình",
    degreeVi: "Đại học",
    degreeEn: "Bachelor",
    avatar: "avatar_default.jpg",
  },
  {
    name: "Ngô Viết Dũng",
    degreeVi: "Đại học",
    degreeEn: "Bachelor",
    avatar: "avatar_default.jpg",
  },
  {
    name: "Trần Hà Vinh",
    degreeVi: "Đại học",
    degreeEn: "Bachelor",
    avatar: "avatar_default.jpg",
  },
  {
    name: "Đào Minh Quân",
    degreeVi: "Đại học",
    degreeEn: "Bachelor",
    avatar: "DaoMinhQuan.jpg",
  },
  {
    name: "Đỗ Ngọc Linh",
    degreeVi: "Đại học",
    degreeEn: "Bachelor",
    avatar: "avatar_default.jpg",
  },
  {
    name: "Đỗ Hoàng Long",
    degreeVi: "Đại học",
    degreeEn: "Bachelor",
    avatar: "avatar_default.jpg",
  },
  {
    name: "Nguyễn Văn Nam",
    degreeVi: "Đại học",
    degreeEn: "Bachelor",
    avatar: "avatar_default.jpg",
  },
  {
    name: "Phạm Nguyễn Thanh Tùng",
    degreeVi: "Đại học",
    degreeEn: "Bachelor",
    avatar: "avatar_default.jpg",
  },
  {
    name: "Vũ Hồng Ngân",
    degreeVi: "Đại học",
    degreeEn: "Bachelor",
    avatar: "avatar_default.jpg",
  },
];

const degreeRank = (m: TeamMember) => (m.degreeEn === "PhD" ? 0 : 1);

export const SORTED_TEAM: TeamMember[] = [...TEAM].sort((a, b) => {
  const da = degreeRank(a);
  const db = degreeRank(b);
  if (da !== db) return da - db;
  return a.name.localeCompare(b.name, "vi");
});

const HOME_TEAM_ORDER = [
  "Đỗ Văn Tuấn",
  "Tô Việt Anh",
  "Trần Văn Vượng",
  "Nguyễn Danh Tuyên",
] as const;

export const HOME_TEAM: TeamMember[] = HOME_TEAM_ORDER.map((name) =>
  SORTED_TEAM.find((m) => m.name === name),
).filter((m): m is TeamMember => !!m);


