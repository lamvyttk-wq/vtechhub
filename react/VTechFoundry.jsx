// V-TECH FOUNDRY landing page: one self-contained React component (Tailwind core classes + lucide-react).
// GENERATED FILE: edit react/template.jsx, react/overlay.mjs or data/*.json, then run `node build-react.mjs`.
import React, { useState, useEffect } from 'react';
import {
  Menu, X, ChevronRight, ArrowRight, ArrowUpRight, Check, Copy, Phone, Mail, MapPin, Globe, Landmark, Building2, ShieldCheck,
  Shield, ShieldAlert, Database, MailCheck, Scale, Factory, HeartPulse, ShoppingBag, Truck, Clapperboard, GraduationCap, Zap,
  Target, Bot, Filter, FileSearch, Megaphone, Boxes
} from 'lucide-react';

const DATA = {
 "solutions": [
  {
   "id": "ai-agent",
   "icon": "bot",
   "name": "AI Agent SuperSales & Assistant",
   "provider": "DatumBridge",
   "tags": [
    {
     "tag": "#taichinh",
     "en": "Finance",
     "vi": "Tài chính"
    },
    {
     "tag": "#nganhang",
     "en": "Banking",
     "vi": "Ngân hàng"
    },
    {
     "tag": "#thuongmaidientu",
     "en": "E-Commerce",
     "vi": "Thương mại điện tử"
    }
   ],
   "tagline": {
    "en": "Omnichannel consulting, care and sales, automated",
    "vi": "Tư vấn, chăm sóc và bán hàng đa kênh, tự động hóa"
   },
   "description": {
    "en": "AI Agent SuperSales & AI Agent Assistant is a comprehensive enterprise AI solution designed to automate omnichannel customer consultation, care, and sales operations.",
    "vi": "AI Agent SuperSales & AI Agent Assistant là giải pháp AI toàn diện, hỗ trợ tự động hóa tư vấn, chăm sóc khách hàng và bán hàng đa kênh."
   },
   "features": [
    {
     "icon": "zap",
     "en": "Omnichannel 24/7 care",
     "vi": "Chăm sóc đa kênh 24/7"
    },
    {
     "icon": "target",
     "en": "Intelligent personalized recommendations",
     "vi": "Đề xuất cá nhân hóa thông minh"
    },
    {
     "icon": "filter",
     "en": "Automated lead scoring",
     "vi": "Chấm điểm khách hàng tiềm năng tự động"
    },
    {
     "icon": "file-search",
     "en": "Internal process search",
     "vi": "Tra cứu quy trình nội bộ"
    },
    {
     "icon": "megaphone",
     "en": "Full-cycle sales conversion",
     "vi": "Chuyển đổi bán hàng trọn chu trình"
    }
   ],
   "metrics": [
    {
     "value": "< 5s",
     "en": "Processing latency",
     "vi": "Độ trễ xử lý"
    },
    {
     "value": "30%",
     "en": "Lead capture rate",
     "vi": "Tỷ lệ thu thập khách hàng tiềm năng",
     "sub": {
      "en": "2,000+ leads per month",
      "vi": "2.000+ lead mỗi tháng"
     }
    },
    {
     "value": "10M+",
     "en": "Omnichannel reach",
     "vi": "Phạm vi tiếp cận đa kênh",
     "sub": {
      "en": "TikTok, Facebook and more",
      "vi": "TikTok, Facebook và các kênh khác"
     }
    },
    {
     "value": "4.7 / 5",
     "en": "Customer satisfaction",
     "vi": "Mức độ hài lòng của khách hàng",
     "sub": {
      "en": "24/7 on Web, Zalo, Messenger, iOS, Android",
      "vi": "24/7 trên Web, Zalo, Messenger, iOS, Android"
     }
    }
   ],
   "layer": "ai"
  },
  {
   "id": "email-security",
   "icon": "mail-check",
   "layer": "edge",
   "name": "VCLOUD & Email Security",
   "tagline": {
    "en": "Sovereign cloud + email defense",
    "vi": "Đám mây chủ quyền + bảo mật email"
   }
  },
  {
   "id": "anti-ddos-cdn",
   "icon": "zap",
   "layer": "edge",
   "name": "Anti-DDoS & CDN",
   "tagline": {
    "en": "Stay online at peak traffic",
    "vi": "Luôn trực tuyến khi lưu lượng đỉnh điểm"
   }
  },
  {
   "id": "web-waf",
   "icon": "shield",
   "layer": "edge",
   "name": "Web Application Firewall",
   "tagline": {
    "en": "Protect login, cart and checkout",
    "vi": "Bảo vệ đăng nhập, giỏ hàng và thanh toán"
   }
  },
  {
   "id": "cdn",
   "icon": "globe",
   "layer": "edge",
   "name": "CDN",
   "tagline": {
    "en": "Faster content delivery across Vietnam",
    "vi": "Phân phối nội dung nhanh trên toàn Việt Nam"
   }
  },
  {
   "id": "anti-ddos-waf",
   "icon": "shield-alert",
   "layer": "edge",
   "name": "Anti-DDoS & WAF",
   "tagline": {
    "en": "Keep sites up under attack",
    "vi": "Giữ website hoạt động khi bị tấn công"
   }
  },
  {
   "id": "dlp",
   "icon": "shield-check",
   "layer": "data",
   "name": "Data Loss Prevention",
   "tagline": {
    "en": "360° insider & leak protection",
    "vi": "Chống thất thoát dữ liệu 360°"
   }
  },
  {
   "id": "database-security",
   "icon": "database",
   "layer": "data",
   "name": "Database Security",
   "tagline": {
    "en": "Query-level control & real-time masking",
    "vi": "Kiểm soát truy vấn & che giấu dữ liệu thời gian thực"
   }
  },
  {
   "id": "ai-legal",
   "icon": "scale",
   "layer": "ai",
   "name": "AI Legal & Compliance",
   "tagline": {
    "en": "AI assistant for contracts & regulation",
    "vi": "Trợ lý AI cho hợp đồng & quy định"
   }
  }
 ],
 "industries": [
  {
   "id": "bfsi",
   "icon": "landmark",
   "name": {
    "en": "Finance & Banking",
    "vi": "Tài chính & Ngân hàng"
   },
   "bundle": [
    "email-security",
    "database-security",
    "dlp",
    "ai-legal",
    "ai-agent"
   ],
   "image": "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80",
   "story": {
    "context": {
     "title": {
      "en": "Salary day: the core system buckles at peak traffic",
      "vi": "Ngày trả lương: hệ thống lõi quá tải ở giờ cao điểm"
     },
     "body": {
      "en": "At 8 a.m. transfers and card payments spike while heavy privileged queries and noisy logs hit the same Core Banking database. Transactions time out, the app slows down and the call center fills up with customers asking what happened.",
      "vi": "Lúc 8 giờ sáng, giao dịch chuyển khoản và thanh toán thẻ tăng vọt, trong khi các truy vấn đặc quyền nặng và log rác cùng đổ vào cơ sở dữ liệu Core Banking. Giao dịch quá hạn, ứng dụng chậm lại và tổng đài ngập trong cuộc gọi hỏi chuyện gì đã xảy ra."
     }
    },
    "entry": {
     "title": {
      "en": "Stop the entry point before it reaches the core network",
      "vi": "Chặn cửa ngõ trước khi vào mạng lõi"
     },
     "body": {
      "en": "Query-level control keeps unauthorized and junk requests off Core Banking, so live transactions stay fast. AI Agents absorb the customer questions instantly instead of the call center.",
      "vi": "Kiểm soát ở mức truy vấn giữ các yêu cầu trái phép và log rác khỏi Core Banking, nhờ vậy giao dịch trực tiếp luôn nhanh. AI Agent trả lời ngay câu hỏi của khách hàng thay cho tổng đài."
     }
    }
   },
   "outcomes": [
    {
     "en": "Protect Customer Data & Trust",
     "vi": "Bảo vệ dữ liệu & niềm tin khách hàng"
    },
    {
     "en": "Stay Ahead of Compliance",
     "vi": "Đi trước yêu cầu tuân thủ"
    },
    {
     "en": "Optimize Operations & Cost",
     "vi": "Tối ưu vận hành & chi phí"
    }
   ]
  },
  {
   "id": "government",
   "icon": "building-2",
   "name": {
    "en": "Government & Public Sector",
    "vi": "Chính phủ & Khu vực công"
   },
   "bundle": [
    "email-security",
    "dlp",
    "database-security",
    "ai-legal"
   ],
   "image": null,
   "story": {
    "context": {
     "title": {
      "en": "A fake notice from a \"superior agency\" opens the door",
      "vi": "Một công văn giả danh \"cơ quan cấp trên\" mở cửa cho kẻ tấn công"
     },
     "body": {
      "en": "An officer opens an urgent notice that appears to come from a higher agency. The attacker gains a foothold, moves toward the citizen database and starts reading records that were never meant to leave the agency.",
      "vi": "Một cán bộ mở công văn khẩn có vẻ đến từ cơ quan cấp trên. Kẻ tấn công có chỗ đứng trong hệ thống, tiến dần tới cơ sở dữ liệu công dân và đọc những hồ sơ vốn không được rời khỏi cơ quan."
     }
    },
    "entry": {
     "title": {
      "en": "Stop the entry point before it reaches the agency network",
      "vi": "Chặn cửa ngõ trước khi vào mạng nội bộ cơ quan"
     },
     "body": {
      "en": "Sovereign email defense filters impersonation at the gateway, while DLP and Database Security protect citizen data if an account is ever compromised.",
      "vi": "Bảo vệ email chủ quyền lọc giả mạo ngay tại cổng, còn DLP và Bảo mật cơ sở dữ liệu bảo vệ dữ liệu công dân nếu có tài khoản bị chiếm quyền."
     }
    }
   },
   "outcomes": [
    {
     "en": "Protect Citizen Data & Public Trust",
     "vi": "Bảo vệ dữ liệu công dân & niềm tin xã hội"
    },
    {
     "en": "Be Ready for Inspection",
     "vi": "Sẵn sàng cho thanh tra, kiểm tra"
    },
    {
     "en": "Do More with Lean IT Teams",
     "vi": "Làm nhiều hơn với đội CNTT tinh gọn"
    }
   ]
  },
  {
   "id": "healthcare",
   "icon": "heart-pulse",
   "name": {
    "en": "Healthcare",
    "vi": "Y tế"
   },
   "bundle": [
    "email-security",
    "database-security",
    "dlp",
    "ai-legal"
   ],
   "image": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80",
   "story": {
    "context": {
     "title": {
      "en": "A phishing email, and patient records leave the hospital",
      "vi": "Một email lừa đảo, và hồ sơ bệnh nhân bị đưa ra ngoài"
     },
     "body": {
      "en": "A clerk in medical records clicks a fake insurance notice. The attacker signs in with that account and quietly copies patient files while wards fall back to paper charts. The hospital learns about it from the outside, after trust is already damaged.",
      "vi": "Một nhân viên hồ sơ bệnh án bấm vào thông báo bảo hiểm giả. Kẻ tấn công đăng nhập bằng tài khoản đó và âm thầm sao chép hồ sơ bệnh nhân, trong khi các khoa phải quay lại bệnh án giấy. Bệnh viện biết chuyện từ bên ngoài, khi niềm tin đã bị tổn hại."
     }
    },
    "entry": {
     "title": {
      "en": "Stop the entry point before it reaches patient records",
      "vi": "Chặn cửa ngõ trước khi chạm tới hồ sơ bệnh nhân"
     },
     "body": {
      "en": "Email defense blocks the lure at the gateway. Database Security and DLP add a second line, masking sensitive fields and flagging records that try to leave.",
      "vi": "Bảo vệ email chặn mồi nhử ngay tại cổng. Bảo mật cơ sở dữ liệu và DLP tạo lớp phòng thủ thứ hai, che các trường nhạy cảm và cảnh báo hồ sơ có dấu hiệu bị đưa ra ngoài."
     }
    }
   },
   "outcomes": [
    {
     "en": "Keep Care Running",
     "vi": "Giữ vận hành khám chữa bệnh liên tục"
    },
    {
     "en": "Protect Patient Trust",
     "vi": "Bảo vệ niềm tin người bệnh"
    },
    {
     "en": "Prepare for Compliance",
     "vi": "Chuẩn bị cho tuân thủ"
    }
   ]
  },
  {
   "id": "retail",
   "icon": "shopping-bag",
   "name": {
    "en": "E-Commerce & Retail",
    "vi": "Thương mại điện tử & Bán lẻ"
   },
   "bundle": [
    "anti-ddos-cdn",
    "web-waf",
    "email-security",
    "dlp",
    "ai-legal",
    "ai-agent"
   ],
   "image": "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=600&q=80",
   "story": {
    "context": {
     "title": {
      "en": "Flash-sale night: shoppers and bots arrive together",
      "vi": "Đêm flash sale: khách mua và bot cùng đổ về"
     },
     "body": {
      "en": "Traffic surges at midnight. Genuine buyers and malicious bots hit login, cart and checkout at the same moment, pages slow down, carts expire and the support inbox fills with \"where is my order?\".",
      "vi": "Lưu lượng tăng vọt lúc nửa đêm. Khách mua thật và bot độc hại cùng đổ vào đăng nhập, giỏ hàng và thanh toán, trang chậm dần, giỏ hàng hết hạn và hộp thư hỗ trợ ngập câu hỏi \"đơn hàng của tôi đâu?\"."
     }
    },
    "entry": {
     "title": {
      "en": "Stop the entry point at the edge, before it reaches checkout",
      "vi": "Chặn cửa ngõ ngay ở biên, trước khi vào thanh toán"
     },
     "body": {
      "en": "Anti-DDoS and CDN absorb the flood, the WAF protects login, cart and checkout, and an AI Agent answers shoppers instantly across channels.",
      "vi": "Anti-DDoS và CDN hấp thụ lưu lượng đột biến, WAF bảo vệ đăng nhập, giỏ hàng và thanh toán, còn AI Agent trả lời khách ngay lập tức trên mọi kênh."
     }
    }
   },
   "outcomes": [
    {
     "en": "Sell Without Interruption",
     "vi": "Bán hàng không gián đoạn"
    },
    {
     "en": "Protect Customer Trust and Compliance",
     "vi": "Bảo vệ niềm tin khách hàng và tuân thủ"
    },
    {
     "en": "Lower Risk and Operating Cost",
     "vi": "Giảm rủi ro và chi phí vận hành"
    }
   ]
  },
  {
   "id": "manufacturing",
   "icon": "factory",
   "name": {
    "en": "Manufacturing",
    "vi": "Sản xuất"
   },
   "bundle": [
    "email-security",
    "database-security",
    "dlp"
   ],
   "image": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
   "story": {
    "context": {
     "title": {
      "en": "One supplier invoice, and the production line stops",
      "vi": "Một email hóa đơn nhà cung cấp, và dây chuyền ngừng chạy"
     },
     "body": {
      "en": "At 7:40 a.m. a planner opens an invoice that looks like it came from a regular supplier. By mid-morning the ransomware has moved from the office network into ERP and MES. Orders freeze, shipments slip and every hour of downtime turns into penalties.",
      "vi": "Lúc 7:40 sáng, nhân viên kế hoạch mở một hóa đơn trông như của nhà cung cấp quen thuộc. Đến giữa buổi, ransomware đã lan từ mạng văn phòng sang ERP và MES. Đơn hàng đứng yên, lô hàng trễ hạn và mỗi giờ ngừng trệ đều trở thành tiền phạt."
     }
    },
    "entry": {
     "title": {
      "en": "Stop the entry point before it reaches the office network",
      "vi": "Chặn cửa ngõ trước khi vào mạng văn phòng"
     },
     "body": {
      "en": "Email defense on sovereign VCLOUD filters spoofed invoices and ransomware at the gateway, so nothing malicious reaches the systems that run the line.",
      "vi": "Bảo vệ email trên VCLOUD chủ quyền lọc hóa đơn giả mạo và ransomware ngay tại cổng, để không gì độc hại chạm tới các hệ thống vận hành dây chuyền."
     }
    }
   },
   "outcomes": [
    {
     "en": "Keep Production Running",
     "vi": "Giữ sản xuất vận hành liên tục"
    },
    {
     "en": "Protect Intellectual Property",
     "vi": "Bảo vệ tài sản trí tuệ"
    },
    {
     "en": "Win and Keep Customers",
     "vi": "Giành và giữ khách hàng"
    }
   ]
  },
  {
   "id": "logistics",
   "icon": "truck",
   "name": {
    "en": "Logistics",
    "vi": "Logistics - Vận tải - Kho vận"
   },
   "bundle": [
    "email-security",
    "database-security",
    "dlp",
    "ai-legal"
   ],
   "image": null,
   "story": {
    "context": {
     "title": {
      "en": "A \"changed bank account\" email redirects a freight payment",
      "vi": "Email \"đổi số tài khoản\" chuyển hướng khoản thanh toán cước"
     },
     "body": {
      "en": "In peak season a message from a carrier partner asks finance to update bank details. The payment goes to the wrong account just as tracking systems slow down and drivers wait for dispatch data.",
      "vi": "Vào mùa cao điểm, một email từ đối tác vận tải đề nghị kế toán cập nhật tài khoản ngân hàng. Khoản thanh toán chuyển nhầm tài khoản đúng lúc hệ thống theo dõi chậm lại và tài xế chờ dữ liệu điều phối."
     }
    },
    "entry": {
     "title": {
      "en": "Stop the entry point before it reaches finance and dispatch",
      "vi": "Chặn cửa ngõ trước khi vào kế toán và điều phối"
     },
     "body": {
      "en": "Email defense on VCLOUD catches spoofed partner messages at the gateway, and Database Security keeps shipment and partner data under query-level control.",
      "vi": "Bảo vệ email trên VCLOUD phát hiện email giả mạo đối tác ngay tại cổng, còn Bảo mật cơ sở dữ liệu giữ dữ liệu vận đơn và đối tác dưới sự kiểm soát mức truy vấn."
     }
    }
   },
   "outcomes": [
    {
     "en": "Protect Cash and Cargo Flow",
     "vi": "Bảo vệ dòng tiền và dòng hàng"
    },
    {
     "en": "Protect Customer, Partner and Driver Data",
     "vi": "Bảo vệ dữ liệu khách hàng, đối tác và tài xế"
    },
    {
     "en": "Cut Manual Document Work",
     "vi": "Giảm công việc chứng từ thủ công"
    }
   ]
  },
  {
   "id": "media",
   "icon": "clapperboard",
   "name": {
    "en": "Media & Digital Content",
    "vi": "Truyền thông & Nội dung số"
   },
   "bundle": [
    "cdn",
    "anti-ddos-waf",
    "email-security",
    "dlp",
    "ai-legal"
   ],
   "image": null,
   "story": {
    "context": {
     "title": {
      "en": "The live broadcast peaks and the site goes down",
      "vi": "Phát sóng trực tiếp lên đỉnh, và website sập"
     },
     "body": {
      "en": "A major live event brings the biggest audience of the year. A flood of requests, some of it malicious, arrives at the same moment. Streams buffer, the site stops responding and viewers move to a competitor.",
      "vi": "Một sự kiện trực tiếp lớn mang lại lượng người xem cao nhất năm. Một lượng yêu cầu khổng lồ, trong đó có cả lưu lượng độc hại, ập đến cùng lúc. Luồng phát giật lag, website ngừng phản hồi và khán giả chuyển sang đối thủ."
     }
    },
    "entry": {
     "title": {
      "en": "Stop the entry point at the edge, before it reaches the origin",
      "vi": "Chặn cửa ngõ ở biên, trước khi tới máy chủ gốc"
     },
     "body": {
      "en": "Anti-DDoS and WAF filter the flood while the CDN serves content close to viewers, so the origin and the broadcast stay up.",
      "vi": "Anti-DDoS và WAF lọc lưu lượng đột biến, trong khi CDN phân phối nội dung gần người xem, giúp máy chủ gốc và buổi phát sóng luôn hoạt động."
     }
    }
   },
   "outcomes": [
    {
     "en": "Stay Online When It Counts",
     "vi": "Luôn trực tuyến vào lúc quan trọng"
    },
    {
     "en": "Protect Content and Brand Trust",
     "vi": "Bảo vệ nội dung và uy tín thương hiệu"
    },
    {
     "en": "Compliance and Efficiency",
     "vi": "Tuân thủ và hiệu quả vận hành"
    }
   ]
  },
  {
   "id": "education",
   "icon": "graduation-cap",
   "name": {
    "en": "Education",
    "vi": "Giáo dục"
   },
   "bundle": [
    "email-security",
    "dlp",
    "database-security"
   ],
   "image": null,
   "story": {
    "context": {
     "title": {
      "en": "Enrollment day: the portal crowds and a student file circulates",
      "vi": "Ngày nhập học: cổng quá tải và hồ sơ sinh viên bị lan truyền"
     },
     "body": {
      "en": "Thousands of applicants log in on the same morning while a spreadsheet of student records is forwarded through chat and personal webmail. The campus faces downtime and a data leak on the busiest day of the term.",
      "vi": "Hàng nghìn thí sinh đăng nhập trong cùng một buổi sáng, trong khi bảng tính hồ sơ sinh viên bị chuyển tiếp qua chat và webmail cá nhân. Nhà trường vừa đối mặt với gián đoạn vừa đối mặt với rò rỉ dữ liệu vào ngày bận rộn nhất của học kỳ."
     }
    },
    "entry": {
     "title": {
      "en": "Stop the entry point before it reaches student data",
      "vi": "Chặn cửa ngõ trước khi chạm tới dữ liệu sinh viên"
     },
     "body": {
      "en": "Sovereign VCLOUD hosting keeps the portal available, email defense stops phishing at the gateway and DLP detects student records on their way out.",
      "vi": "Lưu trữ VCLOUD chủ quyền giữ cổng thông tin luôn sẵn sàng, bảo vệ email chặn phishing tại cổng và DLP phát hiện hồ sơ sinh viên khi chúng bị đưa ra ngoài."
     }
    }
   },
   "outcomes": [
    {
     "en": "Keep Learning Running",
     "vi": "Giữ việc dạy và học không gián đoạn"
    },
    {
     "en": "Protect Students and Meet Decree 13",
     "vi": "Bảo vệ người học và đáp ứng Nghị định 13"
    },
    {
     "en": "Spend Smarter, Keep Data Sovereign",
     "vi": "Chi tiêu hiệu quả, giữ chủ quyền dữ liệu"
    }
   ]
  }
 ],
 "signing": {
  "srcs": [
   "/images/vpbank-vnetwork-signing.jpg",
   "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80"
  ]
 },
 "experts": [
  {
   "id": "duc-anh",
   "initials": "DA",
   "photo": null,
   "years": "16+",
   "summary": {
    "en": "Technology, product development and AI-driven digital transformation.",
    "vi": "Công nghệ, phát triển sản phẩm và chuyển đổi số bằng AI."
   },
   "name": {
    "en": "Mr. Nguyen Duc Anh",
    "vi": "Ông Nguyễn Đức Anh"
   },
   "role": {
    "en": "Founder & CEO, DatumBridge",
    "vi": "Nhà sáng lập & CEO, DatumBridge"
   },
   "domain": null,
   "bio": {
    "en": "Mr Duc Anh has 16+ years of experience in technology, product development, and digital transformation. He leads product vision and strategy at DatumBridge, building practical and scalable AI solutions for real-world business needs.",
    "vi": "Ông Đức Anh có hơn 16 năm kinh nghiệm trong lĩnh vực công nghệ, phát triển sản phẩm và chuyển đổi số. Ông định hướng tầm nhìn và chiến lược sản phẩm tại DatumBridge, tập trung xây dựng các giải pháp AI thực tiễn, dễ triển khai và có khả năng mở rộng cho nhu cầu vận hành của doanh nghiệp."
   }
  },
  {
   "id": "tuan-anh",
   "initials": "TA",
   "photo": null,
   "years": "15+",
   "summary": {
    "en": "Technology, telecoms and data security; leads DLP and Insider Risk Management in Vietnam.",
    "vi": "Công nghệ, viễn thông và bảo mật dữ liệu; dẫn dắt DLP và quản trị rủi ro nội bộ tại Việt Nam."
   },
   "name": {
    "en": "Mr. Hoang Tuan Anh",
    "vi": "Ông Hoàng Tuấn Anh"
   },
   "role": {
    "en": "Country Director – SearchInform",
    "vi": "Giám đốc quốc gia – SearchInform"
   },
   "domain": {
    "en": "Data Loss Prevention (DLP) & Insider Risk Management",
    "vi": "Chống rò rỉ dữ liệu (DLP) & Quản trị rủi ro nội bộ"
   },
   "bio": {
    "en": "With over 15 years of experience in technology, telecommunications, and data security at leading corporations in Vietnam, he specializes in business development and building enterprise partnerships, and leads the expansion of Data Loss Prevention (DLP) and Insider Risk Management solutions in the country.",
    "vi": "Chuyên gia với hơn 15 năm kinh nghiệm trong lĩnh vực công nghệ, viễn thông và bảo mật dữ liệu tại các tập đoàn hàng đầu Việt Nam, chuyên về phát triển kinh doanh và xây dựng quan hệ đối tác với doanh nghiệp. Ông dẫn dắt việc mở rộng các giải pháp chống rò rỉ dữ liệu (DLP) và quản trị rủi ro nội bộ tại Việt Nam."
   }
  },
  {
   "id": "hau",
   "initials": "H",
   "photo": null,
   "years": null,
   "summary": null,
   "name": {
    "en": "Ms. Hau",
    "vi": "Chị Hậu"
   },
   "profile": null,
   "role": null,
   "domain": null,
   "bio": null
  }
 ]
};

const ICONS = {
  landmark: Landmark, 'building-2': Building2, 'heart-pulse': HeartPulse, 'shopping-bag': ShoppingBag, factory: Factory,
  truck: Truck, clapperboard: Clapperboard, 'graduation-cap': GraduationCap, 'mail-check': MailCheck, scale: Scale,
  'shield-check': ShieldCheck, shield: Shield, 'shield-alert': ShieldAlert, database: Database, zap: Zap, globe: Globe,
  bot: Bot, target: Target, filter: Filter, 'file-search': FileSearch, megaphone: Megaphone
};
const Ic = ({ name, ...p }) => { const C = ICONS[name] || Boxes; return <C aria-hidden="true" {...p} />; };

/* [English, Vietnamese] pairs keep both languages in lockstep: a key cannot exist in only one. */
const UI = {
  'nav.industries': ['Industries', 'Ngành'],
  'nav.solutions': ['Solutions', 'Giải pháp'],
  'nav.alliance': ['Alliance', 'Liên minh'],
  'nav.leadership': ['Leadership', 'Lãnh đạo'],
  'nav.request': ['Request Consultation', 'Đăng ký tư vấn'],
  'nav.menu': ['Menu', 'Menu'],
  'nav.close': ['Close', 'Đóng'],
  'nav.primary': ['Primary', 'Điều hướng chính'],
  'nav.lang': ['Language', 'Ngôn ngữ'],
  'hero.eyebrow': ['A VNETWORK technology alliance', 'Liên minh công nghệ của VNETWORK'],
  'hero.title': ['Next-Gen Technology Alliance Delivering Mission-Critical Enterprise Solutions', 'Liên minh Công nghệ Tiên phong Kiến tạo Giải pháp Chuyên sâu cho Doanh nghiệp'],
  'hero.sub': ['Packaged, industry-ready solutions from one alliance.', 'Giải pháp đóng gói theo ngành từ một liên minh.'],
  'hero.explore': ['Explore industries', 'Khám phá các ngành'],
  'ind.pick': ['Choose your sector', 'Chọn lĩnh vực của bạn'],
  'ind.glance': ['A story in one glance', 'Câu chuyện trong một cái nhìn'],
  'ind.entry': ['Entry-point countermeasure', 'Biện pháp chặn cửa ngõ'],
  'ind.solution': ['Packaged solution', 'Gói giải pháp'],
  'ind.outcomes': ['Outcomes', 'Kết quả'],
  'ind.more': ['Read the full story', 'Xem đầy đủ câu chuyện'],
  'ind.less': ['Show less', 'Thu gọn'],
  'ind.illustrative': ['Illustrative scenario', 'Tình huống minh họa'],
  'sol.kicker': ['Featured solution', 'Giải pháp nổi bật'],
  'sol.partner': ['Solution partner', 'Đối tác giải pháp'],
  'sol.talk': ['Talk to an expert', 'Trao đổi với chuyên gia'],
  'sol.more': ['More from the portfolio', 'Thêm từ danh mục giải pháp'],
  'ally.kicker': ['Strategic alliance signing', 'Lễ ký kết liên minh chiến lược'],
  'ally.title': ['VPBank - VNETWORK Alliance', 'Liên minh VPBank - VNETWORK'],
  'ally.body': ['Aligning banking and technology leaders on secure, sovereign digital infrastructure.', 'Kết nối ngân hàng và công nghệ trên nền hạ tầng số an toàn, chủ quyền.'],
  'ally.alt': ['Representatives of VPBank and VNETWORK at the strategic alliance signing', 'Đại diện VPBank và VNETWORK tại lễ ký kết liên minh chiến lược'],
  'ally.glance': ['The alliance at a glance', 'Liên minh trong những con số'],
  'ally.sectors': ['Industry sectors', 'Lĩnh vực ngành'],
  'ally.solutions': ['Packaged solutions', 'Giải pháp đóng gói'],
  'ally.poc': ['Business days to a PoC environment', 'Ngày làm việc để có môi trường PoC'],
  'ally.offices': ['Offices: Ho Chi Minh City and Singapore', 'Văn phòng: TP. Hồ Chí Minh và Singapore'],
  'ldr.kicker': ['Leadership', 'Lãnh đạo'],
  'ldr.title': ['Experts & Advisory Board', 'Chuyên gia & Hội đồng cố vấn'],
  'ldr.years': ['years of experience', 'năm kinh nghiệm'],
  'ldr.domain': ['Domain', 'Lĩnh vực'],
  'ldr.bio': ['Read bio', 'Xem tiểu sử'],
  'ldr.hide': ['Hide bio', 'Ẩn tiểu sử'],
  'ldr.pending': ['Profile to be added from the existing site.', 'Hồ sơ sẽ được bổ sung từ trang hiện có.'],
  'cta.title': ['Ready to start with the right alliance?', 'Sẵn sàng bắt đầu cùng liên minh phù hợp?'],
  'cta.sub': ['An expert replies within one business day.', 'Chuyên gia phản hồi trong một ngày làm việc.'],
  'cta.call': ['Call us', 'Gọi cho chúng tôi'],
  'cta.mail': ['Email sales', 'Email bộ phận kinh doanh'],
  'cta.copy': ['Copy', 'Sao chép'],
  'cta.copied': ['Copied', 'Đã chép'],
  'foot.powered': ['Powered by', 'Vận hành bởi'],
  'foot.terms': ['Terms of Service', 'Điều khoản dịch vụ'],
  'foot.privacy': ['Privacy Policy', 'Chính sách bảo mật'],
  'foot.rights': ['All rights reserved.', 'Bảo lưu mọi quyền.']
};

const CONTACT = {
  phone: '+842873068789', phoneDisplay: '(+84) 28 7306 8789', email: 'contact@vnetwork.vn', website: 'https://vnetwork.vn',
  offices: [
    { en: 'Level 23, UOA Tower, 6 Tan Trao, Tan My Ward, Ho Chi Minh City, Vietnam', vi: 'Tầng 23, Tòa nhà UOA, 6 Tân Trào, Phường Tân Mỹ, TP. Hồ Chí Minh, Việt Nam' },
    { en: '111 North Bridge Road #17-06 Peninsula Plaza, Singapore', vi: '111 North Bridge Road #17-06 Peninsula Plaza, Singapore' }
  ]
};
const POC_DAYS = '14';

const FONT_HREF = 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500..800&family=Inter:wght@400..700&display=swap';
const CSS = `
.vt{font-family:Inter,"Be Vietnam Pro",system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;color:#0f172a;background:#fff;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}
.vt-d{font-family:"Plus Jakarta Sans",Inter,"Be Vietnam Pro",system-ui,-apple-system,"Segoe UI",Roboto,Arial,sans-serif;font-weight:800;letter-spacing:-0.02em;text-wrap:balance}
.vt-fade{animation:vtFade .2s ease-out both}
@keyframes vtFade{from{opacity:0}to{opacity:1}}
@media (prefers-reduced-motion:reduce){.vt-fade{animation:none}.vt *{transition:none!important}}
.vt button:focus-visible,.vt a:focus-visible{outline:2px solid #dc2626;outline-offset:2px}
.vt [id]{scroll-margin-top:4.5rem}
`;

const SOL_BY_ID = Object.fromEntries(DATA.solutions.map((s) => [s.id, s]));
const FEATURED = SOL_BY_ID['ai-agent'];
const OTHER_SOLS = DATA.solutions.filter((s) => s.id !== 'ai-agent');
const wrap = 'mx-auto w-full max-w-6xl px-4 sm:px-6';
const hairline = 'border-slate-200/80';

/* ---------------------------------------------------------------- visuals */
/* Always-present base layer: a slate gradient with a circuit-style SVG pattern, so a photo that is slow or blocked never leaves a void. */
function TechArt({ icon, label }) {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200" role={label ? 'img' : undefined} aria-label={label}>
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <pattern id="vtf-circuit" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M0 20H14M26 20H40M20 0V14M20 26V40" fill="none" stroke="#cbd5e1" strokeWidth="1" />
            <circle cx="20" cy="20" r="3" fill="none" stroke="#94a3b8" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="400" height="300" fill="url(#vtf-circuit)" opacity="0.7" />
        <path d="M40 240H140L170 210H260L290 240H360" fill="none" stroke="#94a3b8" strokeWidth="1.5" opacity="0.55" />
        <path d="M40 70H110L140 100H230" fill="none" stroke="#94a3b8" strokeWidth="1.5" opacity="0.55" />
        <circle cx="360" cy="240" r="4" fill="#dc2626" opacity="0.8" />
        <circle cx="230" cy="100" r="4" fill="#dc2626" opacity="0.8" />
      </svg>
      {icon && (
        <div className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-slate-800 shadow-sm ring-1 ring-slate-200 sm:right-5 sm:top-5 sm:h-14 sm:w-14"><Ic name={icon} className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={1.5} /></div>
      )}
    </div>
  );
}

/* Tries each URL in turn over the TechArt base. The photo fades in only once it has loaded; the scrim and white caption
   render through `children(loaded)` only then, so they never darken the fallback. */
function Photo({ srcs, alt, icon, art, className = '', children }) {
  const list = srcs.filter(Boolean);
  const sig = list.join('|');
  const [i, setI] = useState(0);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setI(0); setLoaded(false); }, [sig]);
  return (
    <div className={`relative overflow-hidden bg-slate-100 ${className}`}>
      {art || <TechArt icon={icon} label={alt} />}
      {i < list.length && (
        <img key={list[i]} src={list[i]} alt={alt} loading="lazy" referrerPolicy="no-referrer" onLoad={() => setLoaded(true)}
          onError={() => { setLoaded(false); setI((n) => n + 1); }}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-200 ${loaded ? 'opacity-100' : 'opacity-0'}`} />
      )}
      {loaded && children && <span className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-slate-900/70 to-transparent" />}
      {children && children(loaded)}
    </div>
  );
}

function Fade({ k, children, className = '' }) { return <div key={k} className={`vt-fade ${className}`}>{children}</div>; }
function Kicker({ children }) { return <p className="text-xs font-bold uppercase tracking-widest text-red-600">{children}</p>; }
function H2({ children }) { return <h2 className="vt-d mt-3 text-3xl tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">{children}</h2>; }

/* ---------------------------------------------------------------- main component */
export default function VTechFoundry() {
  const [lang, setLang] = useState(() => { try { return localStorage.getItem('vtf-lang') === 'vi' ? 'vi' : 'en'; } catch { return 'en'; } });
  const [mobile, setMobile] = useState(false);
  const [indId, setIndId] = useState(DATA.industries[0].id);
  const [full, setFull] = useState(false);
  const [bioOpen, setBioOpen] = useState('');
  const [copied, setCopied] = useState('');

  const u = (k) => (UI[k] ? UI[k][lang === 'vi' ? 1 : 0] : k);
  const tx = (o) => (o == null ? '' : typeof o === 'string' ? o : o[lang] ?? '');

  useEffect(() => {
    document.documentElement.lang = lang;
    try { localStorage.setItem('vtf-lang', lang); } catch { /* storage unavailable */ }
  }, [lang]);

  useEffect(() => {
    if (!document.querySelector('link[data-vtf-fonts]')) {
      const l = document.createElement('link');
      l.rel = 'stylesheet'; l.href = FONT_HREF; l.setAttribute('data-vtf-fonts', '1');
      document.head.appendChild(l);
    }
  }, []);

  useEffect(() => {
    const esc = (e) => { if (e.key === 'Escape') setMobile(false); };
    document.addEventListener('keydown', esc);
    return () => document.removeEventListener('keydown', esc);
  }, []);

  const ind = DATA.industries.find((i) => i.id === indId);

  const goTo = (id) => {
    setMobile(false);
    requestAnimationFrame(() => { const el = document.getElementById(id); if (el) el.scrollIntoView({ block: 'start' }); });
  };
  const pickIndustry = (id) => { setIndId(id); setFull(false); };

  const copy = async (text, key) => {
    try { await navigator.clipboard.writeText(text); } catch {
      try {
        const ta = document.createElement('textarea'); ta.value = text; ta.setAttribute('readonly', ''); ta.style.position = 'fixed'; ta.style.opacity = '0';
        document.body.appendChild(ta); ta.select(); document.execCommand('copy'); document.body.removeChild(ta);
      } catch { /* copy unavailable: the text stays selectable on screen */ }
    }
    setCopied(key); setTimeout(() => setCopied(''), 1500);
  };

  const links = [['industries', u('nav.industries')], ['solutions', u('nav.solutions')], ['alliance', u('nav.alliance')], ['leadership', u('nav.leadership')]];
  const pill = 'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-200';

  return (
    <div className="vt min-h-screen">
      <style>{CSS}</style>

      {/* ---- Header ---- */}
      <header className={`sticky top-0 z-40 border-b ${hairline} bg-white/90 backdrop-blur`}>
        <div className={`${wrap} flex h-16 items-center justify-between gap-3`}>
          <button type="button" onClick={() => goTo('top')} className="flex items-center gap-2" aria-label="V-TECH FOUNDRY">
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-red-600 text-sm font-extrabold text-white">V</span>
            <span className="vt-d text-base tracking-tight text-slate-900">V-TECH FOUNDRY</span>
          </button>
          <nav className="hidden items-center gap-8 lg:flex" aria-label={u('nav.primary')}>
            {links.map(([id, label]) => (
              <button key={id} type="button" onClick={() => goTo(id)} className="text-sm font-semibold text-slate-600 transition-colors duration-200 hover:text-slate-900">{label}</button>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <div className={`flex items-center rounded-full border ${hairline} p-0.5 text-xs font-bold`} role="group" aria-label={u('nav.lang')}>
              {['en', 'vi'].map((l) => (
                <button key={l} type="button" aria-pressed={lang === l} onClick={() => setLang(l)}
                  className={`rounded-full px-3 py-1.5 transition-colors duration-200 ${lang === l ? 'bg-slate-900 text-white' : 'text-slate-600 hover:text-slate-900'}`}>{l.toUpperCase()}</button>
              ))}
            </div>
            <button type="button" onClick={() => goTo('contact')} className={`${pill} hidden bg-slate-900 py-2.5 text-white hover:bg-slate-700 sm:inline-flex`}>{u('nav.request')}</button>
            <button type="button" className={`inline-flex h-10 w-10 items-center justify-center rounded-full border ${hairline} lg:hidden`} aria-label={mobile ? u('nav.close') : u('nav.menu')} aria-expanded={mobile} onClick={() => setMobile((m) => !m)}>
              {mobile ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
            </button>
          </div>
        </div>
        {mobile && (
          <div className={`vt-fade border-t ${hairline} bg-white lg:hidden`}>
            <div className={`${wrap} flex flex-col py-2`}>
              {[...links, ['contact', u('nav.request')]].map(([id, label]) => (
                <button key={id} type="button" onClick={() => goTo(id)} className="py-3 text-left text-sm font-semibold text-slate-800">{label}</button>
              ))}
            </div>
          </div>
        )}
      </header>

      <main id="top">
        {/* ---- 1. Hero & industry showcase ---- */}
        <section className="bg-white py-16 sm:py-24">
          <div className={wrap}>
            <div className="max-w-4xl">
              <Kicker>{u('hero.eyebrow')}</Kicker>
              <h1 className="vt-d mt-4 text-4xl tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">{u('hero.title')}</h1>
              <p className="mt-5 text-lg text-slate-600 sm:text-xl">{u('hero.sub')}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button type="button" onClick={() => goTo('industries')} className={`${pill} bg-slate-900 text-white hover:bg-slate-700`}>{u('hero.explore')}<ArrowRight className="h-4 w-4" aria-hidden="true" /></button>
                <button type="button" onClick={() => goTo('contact')} className={`${pill} border ${hairline} bg-white text-slate-900 hover:bg-slate-50`}>{u('nav.request')}</button>
              </div>
            </div>

            <div id="industries" className={`mt-16 grid gap-8 border-t ${hairline} pt-10 lg:mt-20 lg:grid-cols-12 lg:gap-12`}>
              <div className="min-w-0 lg:col-span-4">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500">{u('ind.pick')}</p>
                <div className="mt-4 flex flex-wrap gap-2 lg:flex-col lg:gap-0" role="tablist" aria-label={u('ind.pick')}>
                  {DATA.industries.map((i) => {
                    const on = i.id === indId;
                    return (
                      <button key={i.id} type="button" role="tab" aria-selected={on} onClick={() => pickIndustry(i.id)}
                        className={`group flex items-center justify-between gap-3 rounded-full border px-4 py-2 text-left text-sm font-semibold transition-colors duration-200 lg:rounded-none lg:border-0 lg:border-b lg:px-0 lg:py-4 lg:text-base ${on ? 'border-slate-900 bg-slate-900 text-white lg:bg-transparent lg:text-slate-900' : `${hairline} text-slate-600 hover:text-slate-900`} ${hairline}`}>
                        <span className="flex items-center gap-3"><Ic name={i.icon} className={`h-5 w-5 ${on ? 'lg:text-red-600' : ''}`} strokeWidth={1.75} />{tx(i.name)}</span>
                        <ChevronRight className={`hidden h-4 w-4 lg:block ${on ? 'text-red-600' : 'text-slate-300'}`} aria-hidden="true" />
                      </button>
                    );
                  })}
                </div>
              </div>

              <Fade k={ind.id} className={`min-w-0 overflow-hidden rounded-2xl border ${hairline} bg-white lg:col-span-8`}>
                <Photo srcs={[ind.image]} alt={tx(ind.name)} icon={ind.icon} className="h-48 sm:h-64">
                  {(ok) => <span className={`absolute inset-x-5 bottom-4 text-lg font-bold sm:text-xl ${ok ? 'text-white' : 'text-slate-900'}`}>{tx(ind.name)}</span>}
                </Photo>
                <div className="divide-y divide-slate-200/80">
                  <div className="p-5 sm:p-7">
                    <p className="text-xs font-bold uppercase tracking-widest text-amber-700">{u('ind.glance')}</p>
                    <p className="vt-d mt-2 text-xl tracking-tight text-slate-900 sm:text-2xl">{tx(ind.story.context.title)}</p>
                    {full && <p className="vt-fade mt-3 text-sm leading-relaxed text-slate-600">{tx(ind.story.context.body)} <span className="text-slate-400">({u('ind.illustrative')})</span></p>}
                  </div>
                  <div className="p-5 sm:p-7">
                    <p className="text-xs font-bold uppercase tracking-widest text-red-600">{u('ind.entry')}</p>
                    <p className="vt-d mt-2 text-xl tracking-tight text-slate-900 sm:text-2xl">{tx(ind.story.entry.title)}</p>
                    {full && <p className="vt-fade mt-3 text-sm leading-relaxed text-slate-600">{tx(ind.story.entry.body)}</p>}
                  </div>
                  <div className="p-5 sm:p-7">
                    <p className="text-xs font-bold uppercase tracking-widest text-emerald-700">{u('ind.solution')}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {ind.bundle.map((id) => (
                        <span key={id} className={`inline-flex items-center gap-2 rounded-full border ${hairline} bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-800`}>
                          <Ic name={SOL_BY_ID[id].icon} className="h-3.5 w-3.5 text-red-600" strokeWidth={1.75} />{SOL_BY_ID[id].name}
                        </span>
                      ))}
                    </div>
                    <p className="mt-5 text-xs font-bold uppercase tracking-widest text-slate-500">{u('ind.outcomes')}</p>
                    <ul className="mt-2 grid gap-2 sm:grid-cols-3">
                      {ind.outcomes.map((o, k) => (
                        <li key={k} className="flex gap-2 text-sm font-semibold text-slate-800"><Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true" /><span>{tx(o)}</span></li>
                      ))}
                    </ul>
                  </div>
                  <div className="px-5 py-4 sm:px-7">
                    <button type="button" aria-expanded={full} onClick={() => setFull((f) => !f)} className="inline-flex items-center gap-1 text-sm font-semibold text-slate-900 hover:underline">
                      {full ? u('ind.less') : u('ind.more')}<ChevronRight className={`h-4 w-4 transition-transform duration-200 ${full ? '-rotate-90' : 'rotate-90'}`} aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </section>

        {/* ---- 2. Featured solutions ---- */}
        <section id="solutions" className={`border-t ${hairline} bg-slate-50 py-16 sm:py-24`}>
          <div className={wrap}>
            <Kicker>{u('sol.kicker')}</Kicker>
            <div className="mt-3 grid gap-8 lg:grid-cols-12 lg:gap-12">
              <div className="min-w-0 lg:col-span-6">
                <h2 className="vt-d text-3xl tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">{FEATURED.name}</h2>
                <p className="mt-4 text-base text-slate-600 sm:text-lg">{tx(FEATURED.description)}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {FEATURED.tags.map((tg) => (
                    <span key={tg.tag} className={`rounded-full border ${hairline} bg-white px-3 py-1 text-xs font-semibold text-slate-700`}>{tg.tag}{lang === 'en' ? <span className="font-normal text-slate-500"> · {tg.en}</span> : null}</span>
                  ))}
                </div>
                <p className="mt-5 text-sm text-slate-600">{u('sol.partner')}: <span className="font-semibold text-slate-900">{FEATURED.provider}</span></p>
                <button type="button" onClick={() => goTo('contact')} className={`${pill} mt-6 bg-slate-900 text-white hover:bg-slate-700`}>{u('sol.talk')}<ArrowRight className="h-4 w-4" aria-hidden="true" /></button>
              </div>
              <ul className={`min-w-0 divide-y divide-slate-200/80 self-start rounded-2xl border ${hairline} bg-white lg:col-span-6`}>
                {FEATURED.features.map((f, k) => (
                  <li key={k} className="flex items-center gap-4 px-5 py-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-red-600"><Ic name={f.icon} className="h-5 w-5" strokeWidth={1.75} /></span>
                    <span className="text-sm font-semibold text-slate-900 sm:text-base">{tx(f)}</span>
                  </li>
                ))}
              </ul>
            </div>

            <dl className={`mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border ${hairline} bg-slate-200/80 lg:grid-cols-4`}>
              {FEATURED.metrics.map((m, k) => (
                <div key={k} className="min-w-0 bg-white p-5 sm:p-7">
                  <dd className="vt-d text-4xl tracking-tight text-slate-900 tabular-nums sm:text-5xl">{m.value}</dd>
                  <dt className="mt-2 text-sm font-semibold text-slate-900">{tx(m)}</dt>
                  {m.sub && <p className="mt-1 text-xs text-slate-500">{tx(m.sub)}</p>}
                </div>
              ))}
            </dl>

            <p className="mt-14 text-xs font-bold uppercase tracking-widest text-slate-500">{u('sol.more')}</p>
            <div className={`mt-4 grid gap-px overflow-hidden rounded-2xl border ${hairline} bg-slate-200/80 sm:grid-cols-2 lg:grid-cols-4`}>
              {OTHER_SOLS.map((s) => (
                <div key={s.id} className="min-w-0 bg-white p-5">
                  <Ic name={s.icon} className="h-6 w-6 text-red-600" strokeWidth={1.5} />
                  <p className="mt-3 text-sm font-bold text-slate-900">{s.name}</p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600">{tx(s.tagline)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---- 3. Strategic alliance & proof ---- */}
        <section id="alliance" className={`border-t ${hairline} bg-white py-16 sm:py-24`}>
          <div className={wrap}>
            <Photo srcs={DATA.signing.srcs} alt={u('ally.alt')} icon="landmark" className={`h-64 rounded-2xl border ${hairline} sm:h-96`}>
              {(ok) => (
                <div className={`absolute inset-x-5 bottom-5 sm:inset-x-8 sm:bottom-7 ${ok ? 'text-white' : 'text-slate-900'}`}>
                  <span className={`block text-xs font-bold uppercase tracking-widest ${ok ? 'text-white/80' : 'text-slate-500'}`}>{u('ally.kicker')}</span>
                  <span className="vt-d mt-1 block text-2xl tracking-tight sm:text-4xl">{u('ally.title')}</span>
                  <span className={`mt-2 block max-w-xl text-sm ${ok ? 'text-white/90' : 'text-slate-600'}`}>{u('ally.body')}</span>
                </div>
              )}
            </Photo>
            <p className="mt-12 text-xs font-bold uppercase tracking-widest text-slate-500">{u('ally.glance')}</p>
            <dl className={`mt-4 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border ${hairline} bg-slate-200/80 lg:grid-cols-4`}>
              {[
                [String(DATA.industries.length), u('ally.sectors')],
                [String(DATA.solutions.length), u('ally.solutions')],
                [POC_DAYS, u('ally.poc')],
                [String(CONTACT.offices.length), u('ally.offices')]
              ].map(([v, label]) => (
                <div key={label} className="min-w-0 bg-white p-5 sm:p-7">
                  <dd className="vt-d text-4xl tracking-tight text-slate-900 tabular-nums sm:text-5xl">{v}</dd>
                  <dt className="mt-2 text-sm font-semibold text-slate-900">{label}</dt>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ---- 4. Leadership ---- */}
        <section id="leadership" className={`border-t ${hairline} bg-slate-50 py-16 sm:py-24`}>
          <div className={wrap}>
            <Kicker>{u('ldr.kicker')}</Kicker>
            <H2>{u('ldr.title')}</H2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {DATA.experts.map((e) => (
                <article key={e.id} className={`flex min-w-0 flex-col rounded-2xl border ${hairline} bg-white p-6`}>
                  <div className="flex items-start justify-between gap-3">
                    <Photo srcs={[e.photo]} alt={tx(e.name)} className="h-16 w-16 shrink-0 rounded-full"
                      art={<div className="vt-d absolute inset-0 flex items-center justify-center bg-slate-900 text-lg text-white" role="img" aria-label={tx(e.name)}>{e.initials}</div>} />
                    {e.years && (
                      <p className="text-right"><span className="vt-d block text-3xl tracking-tight text-slate-900 tabular-nums">{e.years}</span><span className="block text-xs text-slate-500">{u('ldr.years')}</span></p>
                    )}
                  </div>
                  <h3 className="vt-d mt-5 text-xl tracking-tight text-slate-900">{tx(e.name)}</h3>
                  {e.role && <p className="mt-1 text-sm font-semibold text-slate-600">{tx(e.role)}</p>}
                  {e.domain && <p className="mt-3 text-xs font-semibold leading-relaxed text-red-700"><span className="uppercase tracking-widest">{u('ldr.domain')}</span>: {tx(e.domain)}</p>}
                  {e.summary ? <p className="mt-3 text-sm leading-relaxed text-slate-600">{tx(e.summary)}</p> : <p className="mt-3 text-sm italic text-slate-400">{u('ldr.pending')}</p>}
                  {e.bio && (
                    <>
                      {bioOpen === e.id && <p className="vt-fade mt-3 border-t border-slate-200/80 pt-3 text-sm leading-relaxed text-slate-600">{tx(e.bio)}</p>}
                      <button type="button" aria-expanded={bioOpen === e.id} onClick={() => setBioOpen(bioOpen === e.id ? '' : e.id)} className="mt-4 inline-flex items-center gap-1 self-start text-sm font-semibold text-slate-900 hover:underline">
                        {bioOpen === e.id ? u('ldr.hide') : u('ldr.bio')}<ChevronRight className={`h-4 w-4 transition-transform duration-200 ${bioOpen === e.id ? '-rotate-90' : 'rotate-90'}`} aria-hidden="true" />
                      </button>
                    </>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---- Contact band ---- */}
        <section id="contact" className={`border-t ${hairline} bg-white py-16 sm:py-24`}>
          <div className={`${wrap} grid gap-8 lg:grid-cols-12 lg:items-center`}>
            <div className="min-w-0 lg:col-span-6">
              <h2 className="vt-d text-3xl tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">{u('cta.title')}</h2>
              <p className="mt-4 text-base text-slate-600 sm:text-lg">{u('cta.sub')}</p>
            </div>
            <div className="min-w-0 space-y-3 lg:col-span-6">
              {[
                ['call', u('cta.call'), CONTACT.phoneDisplay, `tel:${CONTACT.phone}`, Phone],
                ['mail', u('cta.mail'), CONTACT.email, `mailto:${CONTACT.email}`, Mail]
              ].map(([key, label, value, href, Icon]) => (
                <div key={key} className={`flex items-center justify-between gap-3 rounded-2xl border ${hairline} p-4`}>
                  <div className="flex min-w-0 items-center gap-3">
                    <Icon className="h-5 w-5 shrink-0 text-red-600" strokeWidth={1.75} aria-hidden="true" />
                    <div className="min-w-0"><p className="text-xs text-slate-500">{label}</p><a href={href} className="block break-all text-base font-semibold text-slate-900 hover:underline">{value}</a></div>
                  </div>
                  <button type="button" onClick={() => copy(value, key)} className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border ${hairline} px-3 py-1.5 text-xs font-semibold text-slate-700 transition-colors duration-200 hover:bg-slate-50`}>
                    {copied === key ? <Check className="h-3.5 w-3.5 text-emerald-600" aria-hidden="true" /> : <Copy className="h-3.5 w-3.5" aria-hidden="true" />}{copied === key ? u('cta.copied') : u('cta.copy')}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* ---- Footer ---- */}
      <footer className={`border-t ${hairline} bg-slate-50`}>
        <div className={`${wrap} py-12`}>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="min-w-0">
              <div className="flex items-center gap-2"><span className="flex h-8 w-8 items-center justify-center rounded-md bg-red-600 text-sm font-extrabold text-white">V</span><span className="vt-d text-base tracking-tight text-slate-900">V-TECH FOUNDRY</span></div>
              <p className="mt-4 text-sm text-slate-600">{u('foot.powered')} <a href={CONTACT.website} target="_blank" rel="noopener noreferrer" className="font-bold text-slate-900 hover:underline">VNETWORK</a></p>
            </div>
            <div className="min-w-0 space-y-2 text-sm text-slate-600">
              <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-red-600" aria-hidden="true" />{CONTACT.phoneDisplay}</p>
              <p className="flex items-center gap-2 break-all"><Mail className="h-4 w-4 shrink-0 text-red-600" aria-hidden="true" />{CONTACT.email}</p>
              <p className="flex items-center gap-2"><Globe className="h-4 w-4 text-red-600" aria-hidden="true" /><a href={CONTACT.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:underline">vnetwork.vn<ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" /></a></p>
            </div>
            <div className="min-w-0 space-y-3 text-sm text-slate-600">
              {CONTACT.offices.map((o, k) => <p key={k} className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-red-600" aria-hidden="true" />{tx(o)}</p>)}
            </div>
          </div>
          <div className={`mt-10 flex flex-wrap items-center justify-between gap-3 border-t ${hairline} pt-6 text-xs text-slate-500`}>
            <span>© 2013 VNETWORK JSC. {u('foot.rights')}</span>
            <span><a href={CONTACT.website} target="_blank" rel="noopener noreferrer" className="hover:underline">{u('foot.terms')}</a> · <a href={CONTACT.website} target="_blank" rel="noopener noreferrer" className="hover:underline">{u('foot.privacy')}</a></span>
          </div>
        </div>
      </footer>
    </div>
  );
}
