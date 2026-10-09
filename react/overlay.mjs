// Hand-authored content layered on top of data/*.json by build-react.mjs.
// Everything user-facing is { en, vi }. Do not invent metrics: only numbers supplied by the business appear here.

export const IMAGES = {
  manufacturing: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80',
  healthcare: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80',
  bfsi: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80',
  retail: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=600&q=80'
};

export const SIGNING = {
  srcs: ['/images/vpbank-vnetwork-signing.jpg', 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80']
};

export const NAME_OVERRIDE = {
  bfsi: { en: 'Finance & Banking', vi: 'Tài chính & Ngân hàng' },
  retail: { en: 'E-Commerce & Retail', vi: 'Thương mại điện tử & Bán lẻ' }
};

export const LAYER = {
  'email-security': 'edge', cdn: 'edge', 'anti-ddos-cdn': 'edge', 'anti-ddos-waf': 'edge', 'web-waf': 'edge',
  dlp: 'data', 'database-security': 'data',
  'ai-legal': 'ai', 'ai-agent': 'ai'
};

export const BUNDLE_ADD = { bfsi: ['ai-agent'], retail: ['ai-agent'] };

export const REG_VI = {
  'Decree 13': 'Nghị định 13', 'Decree 13/2023': 'Nghị định 13/2023', SBV: 'Quy định của NHNN', 'PCI DSS': 'PCI DSS',
  MOET: 'Bộ GD&ĐT', 'Law on Cybersecurity': 'Luật An ninh mạng', 'Cybersecurity Law': 'Luật An ninh mạng',
  'Decree 53/2022': 'Nghị định 53/2022', 'Law on Data 2024': 'Luật Dữ liệu 2024', 'Data Law': 'Luật Dữ liệu',
  'Decree 85/2016 & TCVN 11930': 'Nghị định 85/2016 & TCVN 11930',
  'Law on Medical Examination and Treatment': 'Luật Khám bệnh, chữa bệnh', 'MoH EMR rules': 'Quy định bệnh án điện tử của Bộ Y tế',
  'Customs Law': 'Luật Hải quan', 'ISO 27001': 'ISO 27001', 'Customer security audits': 'Đánh giá an ninh của khách hàng',
  'Intellectual Property Law': 'Luật Sở hữu trí tuệ', 'Law on Consumer Protection': 'Luật Bảo vệ quyền lợi người tiêu dùng'
};

// "A story in one glance": context (pain) -> strategic entry point. The packaged solution comes from the industry bundle.
// Scenarios are illustrative and labelled as such in the UI; they cite no incident, customer or statistic.
export const STORIES = {
  manufacturing: {
    context: {
      title: { en: 'One supplier invoice, and the production line stops', vi: 'Một email hóa đơn nhà cung cấp, và dây chuyền ngừng chạy' },
      body: {
        en: 'At 7:40 a.m. a planner opens an invoice that looks like it came from a regular supplier. By mid-morning the ransomware has moved from the office network into ERP and MES. Orders freeze, shipments slip and every hour of downtime turns into penalties.',
        vi: 'Lúc 7:40 sáng, nhân viên kế hoạch mở một hóa đơn trông như của nhà cung cấp quen thuộc. Đến giữa buổi, ransomware đã lan từ mạng văn phòng sang ERP và MES. Đơn hàng đứng yên, lô hàng trễ hạn và mỗi giờ ngừng trệ đều trở thành tiền phạt.'
      }
    },
    entry: {
      title: { en: 'Stop the entry point before it reaches the office network', vi: 'Chặn cửa ngõ trước khi vào mạng văn phòng' },
      body: {
        en: 'Email defense on sovereign VCLOUD filters spoofed invoices and ransomware at the gateway, so nothing malicious reaches the systems that run the line.',
        vi: 'Bảo vệ email trên VCLOUD chủ quyền lọc hóa đơn giả mạo và ransomware ngay tại cổng, để không gì độc hại chạm tới các hệ thống vận hành dây chuyền.'
      }
    }
  },
  healthcare: {
    context: {
      title: { en: 'A phishing email, and patient records leave the hospital', vi: 'Một email lừa đảo, và hồ sơ bệnh nhân bị đưa ra ngoài' },
      body: {
        en: 'A clerk in medical records clicks a fake insurance notice. The attacker signs in with that account and quietly copies patient files while wards fall back to paper charts. The hospital learns about it from the outside, after trust is already damaged.',
        vi: 'Một nhân viên hồ sơ bệnh án bấm vào thông báo bảo hiểm giả. Kẻ tấn công đăng nhập bằng tài khoản đó và âm thầm sao chép hồ sơ bệnh nhân, trong khi các khoa phải quay lại bệnh án giấy. Bệnh viện biết chuyện từ bên ngoài, khi niềm tin đã bị tổn hại.'
      }
    },
    entry: {
      title: { en: 'Stop the entry point before it reaches patient records', vi: 'Chặn cửa ngõ trước khi chạm tới hồ sơ bệnh nhân' },
      body: {
        en: 'Email defense blocks the lure at the gateway. Database Security and DLP add a second line, masking sensitive fields and flagging records that try to leave.',
        vi: 'Bảo vệ email chặn mồi nhử ngay tại cổng. Bảo mật cơ sở dữ liệu và DLP tạo lớp phòng thủ thứ hai, che các trường nhạy cảm và cảnh báo hồ sơ có dấu hiệu bị đưa ra ngoài.'
      }
    }
  },
  bfsi: {
    context: {
      title: { en: 'Salary day: the core system buckles at peak traffic', vi: 'Ngày trả lương: hệ thống lõi quá tải ở giờ cao điểm' },
      body: {
        en: 'At 8 a.m. transfers and card payments spike while heavy privileged queries and noisy logs hit the same Core Banking database. Transactions time out, the app slows down and the call center fills up with customers asking what happened.',
        vi: 'Lúc 8 giờ sáng, giao dịch chuyển khoản và thanh toán thẻ tăng vọt, trong khi các truy vấn đặc quyền nặng và log rác cùng đổ vào cơ sở dữ liệu Core Banking. Giao dịch quá hạn, ứng dụng chậm lại và tổng đài ngập trong cuộc gọi hỏi chuyện gì đã xảy ra.'
      }
    },
    entry: {
      title: { en: 'Stop the entry point before it reaches the core network', vi: 'Chặn cửa ngõ trước khi vào mạng lõi' },
      body: {
        en: 'Query-level control keeps unauthorized and junk requests off Core Banking, so live transactions stay fast. AI Agents absorb the customer questions instantly instead of the call center.',
        vi: 'Kiểm soát ở mức truy vấn giữ các yêu cầu trái phép và log rác khỏi Core Banking, nhờ vậy giao dịch trực tiếp luôn nhanh. AI Agent trả lời ngay câu hỏi của khách hàng thay cho tổng đài.'
      }
    }
  },
  retail: {
    context: {
      title: { en: 'Flash-sale night: shoppers and bots arrive together', vi: 'Đêm flash sale: khách mua và bot cùng đổ về' },
      body: {
        en: 'Traffic surges at midnight. Genuine buyers and malicious bots hit login, cart and checkout at the same moment, pages slow down, carts expire and the support inbox fills with "where is my order?".',
        vi: 'Lưu lượng tăng vọt lúc nửa đêm. Khách mua thật và bot độc hại cùng đổ vào đăng nhập, giỏ hàng và thanh toán, trang chậm dần, giỏ hàng hết hạn và hộp thư hỗ trợ ngập câu hỏi "đơn hàng của tôi đâu?".'
      }
    },
    entry: {
      title: { en: 'Stop the entry point at the edge, before it reaches checkout', vi: 'Chặn cửa ngõ ngay ở biên, trước khi vào thanh toán' },
      body: {
        en: 'Anti-DDoS and CDN absorb the flood, the WAF protects login, cart and checkout, and an AI Agent answers shoppers instantly across channels.',
        vi: 'Anti-DDoS và CDN hấp thụ lưu lượng đột biến, WAF bảo vệ đăng nhập, giỏ hàng và thanh toán, còn AI Agent trả lời khách ngay lập tức trên mọi kênh.'
      }
    }
  },
  government: {
    context: {
      title: { en: 'A fake notice from a "superior agency" opens the door', vi: 'Một công văn giả danh "cơ quan cấp trên" mở cửa cho kẻ tấn công' },
      body: {
        en: 'An officer opens an urgent notice that appears to come from a higher agency. The attacker gains a foothold, moves toward the citizen database and starts reading records that were never meant to leave the agency.',
        vi: 'Một cán bộ mở công văn khẩn có vẻ đến từ cơ quan cấp trên. Kẻ tấn công có chỗ đứng trong hệ thống, tiến dần tới cơ sở dữ liệu công dân và đọc những hồ sơ vốn không được rời khỏi cơ quan.'
      }
    },
    entry: {
      title: { en: 'Stop the entry point before it reaches the agency network', vi: 'Chặn cửa ngõ trước khi vào mạng nội bộ cơ quan' },
      body: {
        en: 'Sovereign email defense filters impersonation at the gateway, while DLP and Database Security protect citizen data if an account is ever compromised.',
        vi: 'Bảo vệ email chủ quyền lọc giả mạo ngay tại cổng, còn DLP và Bảo mật cơ sở dữ liệu bảo vệ dữ liệu công dân nếu có tài khoản bị chiếm quyền.'
      }
    }
  },
  logistics: {
    context: {
      title: { en: 'A "changed bank account" email redirects a freight payment', vi: 'Email "đổi số tài khoản" chuyển hướng khoản thanh toán cước' },
      body: {
        en: 'In peak season a message from a carrier partner asks finance to update bank details. The payment goes to the wrong account just as tracking systems slow down and drivers wait for dispatch data.',
        vi: 'Vào mùa cao điểm, một email từ đối tác vận tải đề nghị kế toán cập nhật tài khoản ngân hàng. Khoản thanh toán chuyển nhầm tài khoản đúng lúc hệ thống theo dõi chậm lại và tài xế chờ dữ liệu điều phối.'
      }
    },
    entry: {
      title: { en: 'Stop the entry point before it reaches finance and dispatch', vi: 'Chặn cửa ngõ trước khi vào kế toán và điều phối' },
      body: {
        en: 'Email defense on VCLOUD catches spoofed partner messages at the gateway, and Database Security keeps shipment and partner data under query-level control.',
        vi: 'Bảo vệ email trên VCLOUD phát hiện email giả mạo đối tác ngay tại cổng, còn Bảo mật cơ sở dữ liệu giữ dữ liệu vận đơn và đối tác dưới sự kiểm soát mức truy vấn.'
      }
    }
  },
  media: {
    context: {
      title: { en: 'The live broadcast peaks and the site goes down', vi: 'Phát sóng trực tiếp lên đỉnh, và website sập' },
      body: {
        en: 'A major live event brings the biggest audience of the year. A flood of requests, some of it malicious, arrives at the same moment. Streams buffer, the site stops responding and viewers move to a competitor.',
        vi: 'Một sự kiện trực tiếp lớn mang lại lượng người xem cao nhất năm. Một lượng yêu cầu khổng lồ, trong đó có cả lưu lượng độc hại, ập đến cùng lúc. Luồng phát giật lag, website ngừng phản hồi và khán giả chuyển sang đối thủ.'
      }
    },
    entry: {
      title: { en: 'Stop the entry point at the edge, before it reaches the origin', vi: 'Chặn cửa ngõ ở biên, trước khi tới máy chủ gốc' },
      body: {
        en: 'Anti-DDoS and WAF filter the flood while the CDN serves content close to viewers, so the origin and the broadcast stay up.',
        vi: 'Anti-DDoS và WAF lọc lưu lượng đột biến, trong khi CDN phân phối nội dung gần người xem, giúp máy chủ gốc và buổi phát sóng luôn hoạt động.'
      }
    }
  },
  education: {
    context: {
      title: { en: 'Enrollment day: the portal crowds and a student file circulates', vi: 'Ngày nhập học: cổng quá tải và hồ sơ sinh viên bị lan truyền' },
      body: {
        en: 'Thousands of applicants log in on the same morning while a spreadsheet of student records is forwarded through chat and personal webmail. The campus faces downtime and a data leak on the busiest day of the term.',
        vi: 'Hàng nghìn thí sinh đăng nhập trong cùng một buổi sáng, trong khi bảng tính hồ sơ sinh viên bị chuyển tiếp qua chat và webmail cá nhân. Nhà trường vừa đối mặt với gián đoạn vừa đối mặt với rò rỉ dữ liệu vào ngày bận rộn nhất của học kỳ.'
      }
    },
    entry: {
      title: { en: 'Stop the entry point before it reaches student data', vi: 'Chặn cửa ngõ trước khi chạm tới dữ liệu sinh viên' },
      body: {
        en: 'Sovereign VCLOUD hosting keeps the portal available, email defense stops phishing at the gateway and DLP detects student records on their way out.',
        vi: 'Lưu trữ VCLOUD chủ quyền giữ cổng thông tin luôn sẵn sàng, bảo vệ email chặn phishing tại cổng và DLP phát hiện hồ sơ sinh viên khi chúng bị đưa ra ngoài.'
      }
    }
  }
};

export const AI_AGENT = {
  id: 'ai-agent',
  icon: 'bot',
  name: 'AI Agent SuperSales & Assistant',
  provider: 'DatumBridge',
  tags: [
    { tag: '#taichinh', en: 'Finance', vi: 'Tài chính' },
    { tag: '#nganhang', en: 'Banking', vi: 'Ngân hàng' },
    { tag: '#thuongmaidientu', en: 'E-Commerce', vi: 'Thương mại điện tử' }
  ],
  tagline: { en: 'Omnichannel consulting, care and sales, automated', vi: 'Tư vấn, chăm sóc và bán hàng đa kênh, tự động hóa' },
  description: {
    en: 'AI Agent SuperSales & AI Agent Assistant is a comprehensive enterprise AI solution designed to automate omnichannel customer consultation, care, and sales operations.',
    vi: 'AI Agent SuperSales & AI Agent Assistant là giải pháp AI toàn diện, hỗ trợ tự động hóa tư vấn, chăm sóc khách hàng và bán hàng đa kênh.'
  },
  features: [
    { icon: 'zap', en: 'Omnichannel 24/7 care', vi: 'Chăm sóc đa kênh 24/7' },
    { icon: 'target', en: 'Intelligent personalized recommendations', vi: 'Đề xuất cá nhân hóa thông minh' },
    { icon: 'filter', en: 'Automated lead scoring', vi: 'Chấm điểm khách hàng tiềm năng tự động' },
    { icon: 'file-search', en: 'Internal process search', vi: 'Tra cứu quy trình nội bộ' },
    { icon: 'megaphone', en: 'Full-cycle sales conversion', vi: 'Chuyển đổi bán hàng trọn chu trình' }
  ],
  metrics: [
    { value: '< 5s', en: 'Processing latency', vi: 'Độ trễ xử lý' },
    { value: '30%', en: 'Lead capture rate', vi: 'Tỷ lệ thu thập khách hàng tiềm năng', sub: { en: '2,000+ leads per month', vi: '2.000+ lead mỗi tháng' } },
    { value: '10M+', en: 'Omnichannel reach', vi: 'Phạm vi tiếp cận đa kênh', sub: { en: 'TikTok, Facebook and more', vi: 'TikTok, Facebook và các kênh khác' } },
    { value: '4.7 / 5', en: 'Customer satisfaction', vi: 'Mức độ hài lòng của khách hàng', sub: { en: '24/7 on Web, Zalo, Messenger, iOS, Android', vi: '24/7 trên Web, Zalo, Messenger, iOS, Android' } }
  ]
};

// Ms. Hau: role, biography and photo must be copied unchanged from the existing site. They were not in the files provided,
// so `profile` is null and the card renders a visible "to be added" note instead of invented text.
export const EXPERTS = [
  {
    id: 'duc-anh', initials: 'DA', photo: null, years: '16+',
    summary: { en: 'Technology, product development and AI-driven digital transformation.', vi: 'Công nghệ, phát triển sản phẩm và chuyển đổi số bằng AI.' },
    name: { en: 'Mr. Nguyen Duc Anh', vi: 'Ông Nguyễn Đức Anh' },
    role: { en: 'Founder & CEO, DatumBridge', vi: 'Nhà sáng lập & CEO, DatumBridge' },
    domain: null,
    bio: {
      en: 'Mr Duc Anh has 16+ years of experience in technology, product development, and digital transformation. He leads product vision and strategy at DatumBridge, building practical and scalable AI solutions for real-world business needs.',
      vi: 'Ông Đức Anh có hơn 16 năm kinh nghiệm trong lĩnh vực công nghệ, phát triển sản phẩm và chuyển đổi số. Ông định hướng tầm nhìn và chiến lược sản phẩm tại DatumBridge, tập trung xây dựng các giải pháp AI thực tiễn, dễ triển khai và có khả năng mở rộng cho nhu cầu vận hành của doanh nghiệp.'
    }
  },
  {
    id: 'tuan-anh', initials: 'TA', photo: null, years: '15+',
    summary: { en: 'Technology, telecoms and data security; leads DLP and Insider Risk Management in Vietnam.', vi: 'Công nghệ, viễn thông và bảo mật dữ liệu; dẫn dắt DLP và quản trị rủi ro nội bộ tại Việt Nam.' },
    name: { en: 'Mr. Hoang Tuan Anh', vi: 'Ông Hoàng Tuấn Anh' },
    role: { en: 'Country Director – SearchInform', vi: 'Giám đốc quốc gia – SearchInform' },
    domain: { en: 'Data Loss Prevention (DLP) & Insider Risk Management', vi: 'Chống rò rỉ dữ liệu (DLP) & Quản trị rủi ro nội bộ' },
    bio: {
      en: 'With over 15 years of experience in technology, telecommunications, and data security at leading corporations in Vietnam, he specializes in business development and building enterprise partnerships, and leads the expansion of Data Loss Prevention (DLP) and Insider Risk Management solutions in the country.',
      vi: 'Chuyên gia với hơn 15 năm kinh nghiệm trong lĩnh vực công nghệ, viễn thông và bảo mật dữ liệu tại các tập đoàn hàng đầu Việt Nam, chuyên về phát triển kinh doanh và xây dựng quan hệ đối tác với doanh nghiệp. Ông dẫn dắt việc mở rộng các giải pháp chống rò rỉ dữ liệu (DLP) và quản trị rủi ro nội bộ tại Việt Nam.'
    }
  },
  {
    id: 'hau', initials: 'H', photo: null, years: null, summary: null,
    name: { en: 'Ms. Hau', vi: 'Chị Hậu' },
    profile: null,
    role: null, domain: null, bio: null
  }
];
