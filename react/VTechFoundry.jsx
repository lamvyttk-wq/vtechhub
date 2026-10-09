// V-TECH FOUNDRY landing page: one self-contained React component (Tailwind core classes + lucide-react).
// GENERATED FILE: edit react/template.jsx, react/overlay.mjs or data/*.json, then run `node build-react.mjs`.
import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  Menu, X, ChevronDown, ChevronLeft, ChevronRight, ArrowRight, Check, Copy, Phone, Mail, MessageCircle, MapPin,
  Building2, Users, Landmark, ShieldCheck, Shield, ShieldAlert, Database, MailCheck, Scale, Factory, HeartPulse,
  ShoppingBag, Truck, Clapperboard, GraduationCap, Zap, Gauge, Target, AlertTriangle, Layers, Package, Bot,
  TrendingUp, Star, FileSearch, Megaphone, Filter, Globe, Boxes, Quote, Award, Clock
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
    "en": "Omnichannel consulting, care and sales on autopilot",
    "vi": "Tư vấn, chăm sóc và bán hàng đa kênh tự động"
   },
   "description": {
    "en": "AI Agent SuperSales & AI Agent Assistant is a comprehensive enterprise AI solution designed to automate omnichannel customer consultation, care, and sales operations.",
    "vi": "AI Agent SuperSales & AI Agent Assistant là giải pháp AI toàn diện, hỗ trợ tự động hóa tư vấn, chăm sóc khách hàng và bán hàng đa kênh."
   },
   "pillars": [
    {
     "icon": "zap",
     "en": "Instant response to all customer inquiries, enhancing user experience",
     "vi": "Phản hồi tức thì mọi thắc mắc, tăng trải nghiệm khách hàng"
    },
    {
     "icon": "target",
     "en": "Smart product recommendations based on real-time behavior and personalized needs",
     "vi": "Đề xuất sản phẩm thông minh dựa trên hành vi và nhu cầu cá nhân hóa"
    },
    {
     "icon": "filter",
     "en": "Automated lead collection, qualification, and segmentation",
     "vi": "Tự động thu thập và phân loại khách hàng tiềm năng"
    },
    {
     "icon": "file-search",
     "en": "Search and retrieval for complex internal procedures (legal, tax, compliance...) tailored for employees",
     "vi": "Hỗ trợ tra cứu quy trình nội bộ phức tạp: pháp chế, thuế... dành riêng cho nhân viên"
    },
    {
     "icon": "megaphone",
     "en": "End-to-end sales automation: upselling, cross-selling, deal closing, and automated promotional post generation",
     "vi": "Tự động hóa tư vấn bán hàng: upsell, cross-sell, chốt sales, đăng bài quảng bá"
    }
   ],
   "metrics": [
    {
     "icon": "users",
     "value": "10M+",
     "en": "Customers reached across TikTok, Facebook and omnichannel touchpoints",
     "vi": "Khách hàng được tiếp cận qua TikTok, Facebook và các điểm chạm đa kênh"
    },
    {
     "icon": "gauge",
     "value": "< 5s",
     "en": "Request processing time, accelerated",
     "vi": "Thời gian xử lý yêu cầu được rút ngắn"
    },
    {
     "icon": "trending-up",
     "value": "30%",
     "en": "Average lead capture rate (~2,000+ prospective leads per month)",
     "vi": "Tỷ lệ thu thập khách hàng tiềm năng trung bình (~2.000+ lead mỗi tháng)"
    },
    {
     "icon": "star",
     "value": "4.7 / 5",
     "en": "Customer rating, with 24/7 support on Web, Zalo, Messenger, iOS and Android",
     "vi": "Điểm đánh giá, hỗ trợ 24/7 trên Web, Zalo, Messenger, iOS và Android"
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
   },
   "description": {
    "en": "Secure cloud hosting that keeps your financial data inside Vietnam, paired with advanced email defense that stops phishing, executive spoofing, and ransomware before they reach employee inboxes.",
    "vi": "Hạ tầng đám mây bảo mật giữ dữ liệu tài chính của bạn ngay tại Việt Nam, kết hợp bảo vệ email nâng cao chặn phishing, giả mạo lãnh đạo và ransomware trước khi chúng đến hộp thư nhân viên."
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
   },
   "description": {
    "en": "Anti-DDoS filtering and content delivery network that absorb attack traffic and speed up content delivery, keeping storefronts and checkout available during flash sales and campaigns.",
    "vi": "Lớp lọc chống DDoS và mạng phân phối nội dung (CDN) hấp thụ lưu lượng tấn công và tăng tốc phân phối nội dung, giữ website bán hàng và thanh toán sẵn sàng trong flash sale và các chiến dịch."
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
   },
   "description": {
    "en": "A web application firewall that blocks injection attacks and abusive automation against login, cart and promotion endpoints, supporting PCI DSS web-application controls.",
    "vi": "Tường lửa ứng dụng web chặn tấn công injection và tự động hóa lạm dụng nhắm vào các điểm đăng nhập, giỏ hàng, khuyến mãi, hỗ trợ các kiểm soát ứng dụng web của PCI DSS."
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
   },
   "description": {
    "en": "Content delivery network that caches video, images and web assets close to viewers, reducing origin load and buffering during traffic peaks.",
    "vi": "Mạng phân phối nội dung lưu đệm video, hình ảnh và tài nguyên web gần người xem, giảm tải máy chủ gốc và hạn chế giật lag khi lưu lượng tăng cao."
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
   },
   "description": {
    "en": "Filters DDoS floods and blocks web application attacks so portals, streaming and content platforms stay available and uncompromised.",
    "vi": "Lọc tấn công DDoS và chặn tấn công ứng dụng web để cổng thông tin, streaming và nền tảng nội dung luôn sẵn sàng và không bị xâm nhập."
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
   },
   "description": {
    "en": "Full 360-degree monitoring across chat apps, personal webmail, and USB drives. It automatically detects sensitive customer records to stop insider fraud, prevent data leaks, and ensure Decree 13 compliance.",
    "vi": "Giám sát 360° trên ứng dụng chat, webmail cá nhân và USB. Tự động phát hiện hồ sơ khách hàng nhạy cảm để ngăn gian lận nội bộ, rò rỉ dữ liệu và đảm bảo tuân thủ Nghị định 13."
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
   },
   "description": {
    "en": "Direct query-level access control and real-time data masking built for Core Banking systems. It stops privileged admin abuse without slowing down live transactions or overloading systems with junk logs.",
    "vi": "Kiểm soát truy cập mức truy vấn và che giấu dữ liệu thời gian thực dành cho hệ thống Core Banking. Ngăn lạm quyền quản trị mà không làm chậm giao dịch trực tiếp hay tràn log rác."
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
   },
   "description": {
    "en": "A specialized AI assistant trained on State Bank of Vietnam regulations with 95% accuracy. It automates loan and contract reviews to cut routine workload by 42%, with an on-premise option to ensure total data privacy.",
    "vi": "Trợ lý AI chuyên biệt được huấn luyện trên quy định của Ngân hàng Nhà nước, độ chính xác 95%. Tự động rà soát hợp đồng tín dụng, giảm 42% khối lượng công việc thường nhật, có tùy chọn triển khai on-premise để đảm bảo riêng tư dữ liệu tuyệt đối."
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
   "title": {
    "en": "Banking, Financial Services & Insurance",
    "vi": "Ngân hàng, Dịch vụ Tài chính & Bảo hiểm"
   },
   "tagline": {
    "en": "VCLOUD & Email Security, AI Legal & Compliance, Data Loss Prevention and Core Banking Database Security.",
    "vi": "VCLOUD & Email Security, AI Legal & Compliance, Chống thất thoát dữ liệu và Bảo mật cơ sở dữ liệu Core Banking."
   },
   "bundle": [
    "email-security",
    "database-security",
    "dlp",
    "ai-legal",
    "ai-agent"
   ],
   "image": "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
   "regs": [
    {
     "en": "Decree 13",
     "vi": "Nghị định 13"
    },
    {
     "en": "SBV",
     "vi": "Quy định của NHNN"
    },
    {
     "en": "PCI DSS",
     "vi": "PCI DSS"
    }
   ],
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
   "chapters": [
    {
     "id": "phishing",
     "persona": {
      "en": "Head of Information Security",
      "vi": "Giám đốc An ninh thông tin"
     },
     "challenge": {
      "title": {
       "en": "Phishing and Ransomware Through Email",
       "vi": "Phishing và Ransomware qua Email"
      },
      "body": {
       "en": "Email is one of the most common ways attackers enter financial organisations. Phishing emails, fake payment requests, and ransomware can steal employee credentials, trigger fraudulent transfers, and disrupt critical banking operations.",
       "vi": "Email là con đường phổ biến nhất để tin tặc xâm nhập tổ chức tài chính. Email phishing, yêu cầu thanh toán giả mạo và ransomware có thể đánh cắp thông tin đăng nhập, kích hoạt chuyển tiền gian lận và làm gián đoạn hoạt động ngân hàng."
      }
     },
     "solutions": [
      "email-security"
     ],
     "response": {
      "title": {
       "en": "Stop it before it reaches the inbox",
       "vi": "Chặn từ trước khi vào hộp thư"
      },
      "body": {
       "en": "Advanced email defense on VCLOUD stops phishing, executive spoofing and ransomware before they reach employees, while your data stays inside Vietnam.",
       "vi": "Bảo vệ email nâng cao trên VCLOUD chặn phishing, giả mạo lãnh đạo và ransomware trước khi tới nhân viên, trong khi dữ liệu vẫn nằm tại Việt Nam."
      },
      "points": [
       {
        "en": "Blocks phishing and executive spoofing",
        "vi": "Chặn phishing và giả mạo lãnh đạo"
       },
       {
        "en": "Stops ransomware at the mail gateway",
        "vi": "Ngăn ransomware ngay tại cổng email"
       },
       {
        "en": "Sovereign hosting inside Vietnam",
        "vi": "Lưu trữ chủ quyền ngay tại Việt Nam"
       }
      ]
     }
    },
    {
     "id": "fraud",
     "persona": {
      "en": "Head of Operations & Payments",
      "vi": "Giám đốc Vận hành & Thanh toán"
     },
     "challenge": {
      "title": {
       "en": "Fraudulent Payments and Transaction Changes",
       "vi": "Thanh toán gian lận và thay đổi giao dịch"
      },
      "body": {
       "en": "Online banking and digital payments make it easier for criminals to use stolen identities, submit fraudulent payment requests, or alter transaction information. If not detected early, the bank faces direct financial loss, operational disruption, and customer complaints.",
       "vi": "Ngân hàng số và thanh toán điện tử giúp tội phạm dễ dùng danh tính bị đánh cắp, gửi yêu cầu thanh toán gian lận hoặc sửa thông tin giao dịch. Nếu không phát hiện sớm, ngân hàng chịu tổn thất tài chính trực tiếp, gián đoạn vận hành và khiếu nại của khách hàng."
      }
     },
     "solutions": [
      "email-security",
      "database-security"
     ],
     "response": {
      "title": {
       "en": "Close both doors: the request and the record",
       "vi": "Đóng cả hai cửa: yêu cầu và dữ liệu"
      },
      "body": {
       "en": "Spoofed payment requests are filtered at the email layer, and sensitive SQL changes on Core Banking require approval, so a forged instruction cannot quietly become a changed transaction.",
       "vi": "Yêu cầu thanh toán giả mạo bị lọc ở lớp email, còn các thay đổi SQL nhạy cảm trên Core Banking phải qua phê duyệt, nên một chỉ thị giả không thể âm thầm biến thành giao dịch bị sửa."
      },
      "points": [
       {
        "en": "Filters fake payment requests at the source",
        "vi": "Lọc yêu cầu thanh toán giả từ nguồn"
       },
       {
        "en": "Approval workflow for sensitive SQL",
        "vi": "Quy trình phê duyệt cho SQL nhạy cảm"
       },
       {
        "en": "Audit trail for every change",
        "vi": "Nhật ký kiểm toán mọi thay đổi"
       }
      ]
     }
    },
    {
     "id": "core-access",
     "persona": {
      "en": "Head of Core Banking / DBA Lead",
      "vi": "Trưởng bộ phận Core Banking / DBA"
     },
     "challenge": {
      "title": {
       "en": "Uncontrolled Access to Core Banking Data",
       "vi": "Truy cập không kiểm soát vào dữ liệu Core Banking"
      },
      "body": {
       "en": "Core banking databases are accessed by internal teams, administrators, developers, and external service providers. Without clear access control and monitoring, privileged users may view, copy, or change sensitive data without timely detection.",
       "vi": "Cơ sở dữ liệu lõi được truy cập bởi đội nội bộ, quản trị viên, lập trình viên và nhà cung cấp bên ngoài. Thiếu kiểm soát và giám sát rõ ràng, người dùng đặc quyền có thể xem, sao chép hoặc sửa dữ liệu nhạy cảm mà không bị phát hiện kịp thời."
      }
     },
     "solutions": [
      "database-security"
     ],
     "response": {
      "title": {
       "en": "Every query seen, every secret masked",
       "vi": "Mọi truy vấn đều được thấy, mọi bí mật đều được che"
      },
      "body": {
       "en": "Query-level access control and real-time data masking stop privileged admin abuse without slowing live transactions or flooding systems with junk logs.",
       "vi": "Kiểm soát mức truy vấn và che giấu dữ liệu thời gian thực ngăn lạm quyền quản trị mà không làm chậm giao dịch hay tràn log rác."
      },
      "points": [
       {
        "en": "Proxy gateway restricts direct database access",
        "vi": "Cổng proxy hạn chế truy cập trực tiếp CSDL"
       },
       {
        "en": "Account numbers and balances masked for unauthorized admins",
        "vi": "Số tài khoản và số dư được che với quản trị viên không có quyền"
       },
       {
        "en": "No impact on live transactions",
        "vi": "Không ảnh hưởng giao dịch trực tiếp"
       }
      ]
     }
    },
    {
     "id": "leak",
     "persona": {
      "en": "Chief Compliance Officer",
      "vi": "Giám đốc Tuân thủ"
     },
     "challenge": {
      "title": {
       "en": "Customer Data Leakage and Compliance Pressure",
       "vi": "Rò rỉ dữ liệu khách hàng và áp lực tuân thủ"
      },
      "body": {
       "en": "Banks hold highly sensitive data: customer identity, account details, card data, loan records, insurance documents. A single leak can create serious compliance issues under Decree 13, SBV requirements and PCI DSS, and lasting damage to customer trust.",
       "vi": "Ngân hàng nắm giữ dữ liệu cực kỳ nhạy cảm: danh tính khách hàng, tài khoản, thẻ, hồ sơ vay, hợp đồng bảo hiểm. Một vụ rò rỉ có thể gây vi phạm nghiêm trọng theo Nghị định 13, yêu cầu của NHNN và PCI DSS, cùng tổn hại lâu dài đến niềm tin khách hàng."
      }
     },
     "solutions": [
      "dlp"
     ],
     "response": {
      "title": {
       "en": "See sensitive data wherever it tries to leave",
       "vi": "Thấy dữ liệu nhạy cảm ở mọi nơi nó cố rời đi"
      },
      "body": {
       "en": "360-degree monitoring across chat apps, personal webmail and USB drives detects customer records automatically, stopping insider fraud and leaks while supporting Decree 13 compliance.",
       "vi": "Giám sát 360° trên ứng dụng chat, webmail cá nhân và USB tự động nhận diện hồ sơ khách hàng, ngăn gian lận nội bộ và rò rỉ, hỗ trợ tuân thủ Nghị định 13."
      },
      "points": [
       {
        "en": "Covers chat, webmail and USB",
        "vi": "Bao phủ chat, webmail và USB"
       },
       {
        "en": "Auto-detects KYC and account records",
        "vi": "Tự nhận diện dữ liệu KYC và tài khoản"
       },
       {
        "en": "Evidence ready for audits",
        "vi": "Bằng chứng sẵn sàng cho kiểm toán"
       }
      ]
     }
    },
    {
     "id": "legal",
     "persona": {
      "en": "Head of Legal & Credit Operations",
      "vi": "Trưởng bộ phận Pháp chế & Tín dụng"
     },
     "challenge": {
      "title": {
       "en": "Slow Legal and Compliance Reviews",
       "vi": "Rà soát pháp lý và tuân thủ chậm"
      },
      "body": {
       "en": "Loan agreements, insurance contracts and regulatory documents need detailed manual review. This slows approvals, delays customer service, and makes it harder for legal and compliance teams to keep up with changing regulations.",
       "vi": "Hợp đồng tín dụng, hợp đồng bảo hiểm và văn bản quy định cần rà soát thủ công chi tiết. Điều này làm chậm phê duyệt, trì hoãn phục vụ khách hàng và khiến đội pháp chế khó theo kịp quy định thay đổi."
      }
     },
     "solutions": [
      "ai-legal"
     ],
     "response": {
      "title": {
       "en": "Review in minutes, not days",
       "vi": "Rà soát trong vài phút thay vì vài ngày"
      },
      "body": {
       "en": "An AI assistant trained on State Bank of Vietnam regulations automates loan and contract review, with an on-premise option so sensitive documents never leave your walls.",
       "vi": "Trợ lý AI huấn luyện trên quy định của Ngân hàng Nhà nước tự động rà soát hợp đồng tín dụng, có tùy chọn on-premise để tài liệu nhạy cảm không rời khỏi hệ thống của bạn."
      },
      "points": [
       {
        "en": "Trained on SBV regulations",
        "vi": "Huấn luyện trên quy định NHNN"
       },
       {
        "en": "On-premise option for total privacy",
        "vi": "Tùy chọn on-premise bảo mật tuyệt đối"
       },
       {
        "en": "Frees legal teams for high-value work",
        "vi": "Giải phóng đội pháp chế cho việc giá trị cao"
       }
      ],
      "metric": {
       "value": "95%",
       "label": {
        "en": "accuracy on SBV regulation",
        "vi": "độ chính xác theo quy định NHNN"
       }
      }
     }
    }
   ],
   "outcomes": [
    {
     "title": {
      "en": "Protect Customer Data & Trust",
      "vi": "Bảo vệ dữ liệu & niềm tin khách hàng"
     },
     "body": {
      "en": "Protect KYC data, account information and transaction records across email, users, infrastructure and Core Banking, reducing the risk of leakage and unauthorized access.",
      "vi": "Bảo vệ dữ liệu KYC, thông tin tài khoản và giao dịch trên email, người dùng, hạ tầng và Core Banking, giảm rủi ro rò rỉ và truy cập trái phép."
     }
    },
    {
     "title": {
      "en": "Stay Ahead of Compliance",
      "vi": "Đi trước yêu cầu tuân thủ"
     },
     "body": {
      "en": "VCLOUD infrastructure in Vietnam plus data protection and access controls help institutions prepare for data protection requirements, audits and industry regulations.",
      "vi": "Hạ tầng VCLOUD tại Việt Nam cùng kiểm soát bảo vệ dữ liệu và truy cập giúp tổ chức chuẩn bị cho yêu cầu bảo vệ dữ liệu, kiểm toán và quy định ngành."
     }
    },
    {
     "title": {
      "en": "Optimize Operations & Cost",
      "vi": "Tối ưu vận hành & chi phí"
     },
     "body": {
      "en": "Automate security controls, data monitoring and document review to reduce manual work, incident-response cost and IT effort.",
      "vi": "Tự động hóa kiểm soát an ninh, giám sát dữ liệu và rà soát tài liệu để giảm công việc thủ công, chi phí ứng phó sự cố và tải cho IT."
     }
    }
   ],
   "faq": [
    {
     "q": {
      "en": "How does the platform secure core banking databases from privileged internal accounts?",
      "vi": "Nền tảng bảo vệ CSDL core banking khỏi tài khoản nội bộ đặc quyền như thế nào?"
     },
     "a": {
      "en": "DBSAFER DB restricts direct database access through proxy gateways, enforces approval workflows for sensitive SQL queries, and applies DATACRYPTO masking so account numbers and balances are unreadable to unauthorized administrators.",
      "vi": "DBSAFER DB hạn chế truy cập trực tiếp qua cổng proxy, áp dụng quy trình phê duyệt cho truy vấn SQL nhạy cảm và che giấu bằng DATACRYPTO để số tài khoản, số dư không thể đọc được với quản trị viên không có quyền."
     }
    },
    {
     "q": {
      "en": "How does the AI Legal solution reduce compliance processing times?",
      "vi": "Giải pháp AI Legal rút ngắn thời gian xử lý tuân thủ như thế nào?"
     },
     "a": {
      "en": "It reviews loan agreements and contracts automatically against State Bank of Vietnam regulations, cutting routine review workload by 42%. An on-premise option keeps all data private.",
      "vi": "Giải pháp tự động rà soát hợp đồng tín dụng theo quy định của Ngân hàng Nhà nước, giảm 42% khối lượng rà soát thường nhật. Tùy chọn on-premise giữ toàn bộ dữ liệu riêng tư."
     }
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
   "title": {
    "en": "Government & Public Sector",
    "vi": "Chính phủ & Khu vực công"
   },
   "tagline": {
    "en": "Sovereign VCLOUD & Email Security, Data Loss Prevention, Database Security and AI Legal & Compliance for agencies serving citizens.",
    "vi": "VCLOUD & Email Security chủ quyền, Chống thất thoát dữ liệu, Bảo mật cơ sở dữ liệu và AI Legal & Compliance cho cơ quan nhà nước phục vụ người dân."
   },
   "bundle": [
    "email-security",
    "dlp",
    "database-security",
    "ai-legal"
   ],
   "image": null,
   "regs": [
    {
     "en": "Law on Cybersecurity",
     "vi": "Luật An ninh mạng"
    },
    {
     "en": "Decree 53/2022",
     "vi": "Nghị định 53/2022"
    },
    {
     "en": "Decree 13/2023",
     "vi": "Nghị định 13/2023"
    },
    {
     "en": "Law on Data 2024",
     "vi": "Luật Dữ liệu 2024"
    },
    {
     "en": "Decree 85/2016 & TCVN 11930",
     "vi": "Nghị định 85/2016 & TCVN 11930"
    }
   ],
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
   "chapters": [
    {
     "id": "phishing",
     "persona": {
      "en": "Head of Information Security (agency CISO)",
      "vi": "Lãnh đạo An toàn thông tin của cơ quan"
     },
     "challenge": {
      "title": {
       "en": "Spear-phishing against officials and civil servants",
       "vi": "Email giả mạo nhắm vào lãnh đạo và cán bộ"
      },
      "body": {
       "en": "Official mail is a favourite entry point: a message that imitates a superior, a ministry or a document circular can steal credentials or drop malware. Once inside one mailbox, attackers move towards shared drives and administrative systems.",
       "vi": "Email công vụ là cửa vào ưa thích của kẻ tấn công: một thư giả danh cấp trên, bộ ngành hoặc công văn có thể lấy cắp tài khoản hoặc cài mã độc. Khi đã vào được một hộp thư, chúng dễ dàng di chuyển sang ổ chia sẻ và các hệ thống quản trị."
      }
     },
     "solutions": [
      "email-security"
     ],
     "response": {
      "title": {
       "en": "Filter the threat before it reaches the civil servant",
       "vi": "Chặn mối đe dọa trước khi tới cán bộ"
      },
      "body": {
       "en": "Advanced email defense on VCLOUD screens phishing, impersonation of leaders and ransomware at the gateway, while mail data stays on infrastructure inside Vietnam.",
       "vi": "Bảo vệ email nâng cao trên VCLOUD lọc phishing, giả mạo lãnh đạo và ransomware ngay tại cổng thư, trong khi dữ liệu thư nằm trên hạ tầng đặt tại Việt Nam."
      },
      "points": [
       {
        "en": "Blocks phishing and leader impersonation",
        "vi": "Chặn phishing và giả mạo lãnh đạo"
       },
       {
        "en": "Stops ransomware at the mail gateway",
        "vi": "Ngăn ransomware ngay tại cổng thư"
       },
       {
        "en": "Hosted inside Vietnam",
        "vi": "Lưu trữ ngay tại Việt Nam"
       }
      ]
     }
    },
    {
     "id": "citizen-data",
     "persona": {
      "en": "Head of Department / Director of Public Service Delivery",
      "vi": "Thủ trưởng đơn vị / Giám đốc trung tâm phục vụ hành chính công"
     },
     "challenge": {
      "title": {
       "en": "Citizen records leaking and public trust eroding",
       "vi": "Hồ sơ công dân bị lộ, niềm tin xã hội suy giảm"
      },
      "body": {
       "en": "Agencies hold identity, tax, health, land and social-insurance records. A single officer copying files to a personal webmail, chat app or USB drive can expose thousands of citizens, trigger public complaints and put leadership accountable.",
       "vi": "Cơ quan nhà nước nắm giữ dữ liệu định danh, thuế, y tế, đất đai, bảo hiểm xã hội. Chỉ một cán bộ sao chép tệp sang webmail cá nhân, ứng dụng chat hoặc USB cũng có thể làm lộ thông tin hàng nghìn người dân, dẫn đến phản ánh dư luận và trách nhiệm của người đứng đầu."
      }
     },
     "solutions": [
      "dlp"
     ],
     "response": {
      "title": {
       "en": "See sensitive records wherever they try to leave",
       "vi": "Thấy hồ sơ nhạy cảm ở bất cứ nơi nào chúng cố rời đi"
      },
      "body": {
       "en": "360-degree monitoring across chat apps, personal webmail and USB drives automatically recognises citizen records and stops leaks, whether accidental or deliberate.",
       "vi": "Giám sát 360° trên ứng dụng chat, webmail cá nhân và USB tự động nhận diện hồ sơ công dân và ngăn rò rỉ, dù vô ý hay cố ý."
      },
      "points": [
       {
        "en": "Covers chat, webmail and USB",
        "vi": "Bao phủ chat, webmail và USB"
       },
       {
        "en": "Auto-detects personal data",
        "vi": "Tự nhận diện dữ liệu cá nhân"
       },
       {
        "en": "Incident evidence for investigation",
        "vi": "Bằng chứng phục vụ điều tra sự cố"
       }
      ]
     }
    },
    {
     "id": "privileged-access",
     "persona": {
      "en": "Head of IT / Database Administration",
      "vi": "Trưởng phòng CNTT / Quản trị cơ sở dữ liệu"
     },
     "challenge": {
      "title": {
       "en": "Who can see the national and sectoral databases?",
       "vi": "Ai được xem các cơ sở dữ liệu quốc gia và chuyên ngành?"
      },
      "body": {
       "en": "Administrators, outsourced developers and integration partners often hold broad access to population, tax or licensing databases. Without query-level control, misuse of privileges is hard to detect and harder to prove.",
       "vi": "Quản trị viên, đơn vị phát triển thuê ngoài và đối tác tích hợp thường có quyền rộng trên các cơ sở dữ liệu dân cư, thuế, cấp phép. Thiếu kiểm soát ở mức truy vấn, việc lạm quyền khó phát hiện và càng khó chứng minh."
      }
     },
     "solutions": [
      "database-security"
     ],
     "response": {
      "title": {
       "en": "Every query controlled, sensitive fields masked",
       "vi": "Kiểm soát từng truy vấn, che giấu trường dữ liệu nhạy cảm"
      },
      "body": {
       "en": "Query-level access control and real-time masking limit what administrators and partners can read or change, without slowing live public services.",
       "vi": "Kiểm soát truy cập mức truy vấn và che giấu dữ liệu thời gian thực giới hạn những gì quản trị viên và đối tác được đọc hoặc sửa, không làm chậm dịch vụ công đang vận hành."
      },
      "points": [
       {
        "en": "Restricts direct database access",
        "vi": "Hạn chế truy cập trực tiếp vào CSDL"
       },
       {
        "en": "Masks ID numbers and personal fields",
        "vi": "Che số định danh và trường dữ liệu cá nhân"
       },
       {
        "en": "Full audit trail of privileged activity",
        "vi": "Nhật ký kiểm toán đầy đủ hoạt động đặc quyền"
       }
      ]
     }
    },
    {
     "id": "compliance",
     "persona": {
      "en": "CIO / Chief of Office",
      "vi": "Giám đốc CNTT / Chánh Văn phòng"
     },
     "challenge": {
      "title": {
       "en": "Proving compliance with cybersecurity and data law",
       "vi": "Chứng minh tuân thủ pháp luật về an ninh mạng và dữ liệu"
      },
      "body": {
       "en": "Agencies must classify systems by security level (Decree 85/2016, TCVN 11930), protect personal data (Decree 13/2023), and follow data rules under the Law on Cybersecurity, Decree 53/2022 and the Law on Data 2024. Inspectors expect evidence, not intentions.",
       "vi": "Cơ quan phải xác định cấp độ an toàn hệ thống thông tin (Nghị định 85/2016, TCVN 11930), bảo vệ dữ liệu cá nhân (Nghị định 13/2023) và tuân thủ quy định về dữ liệu theo Luật An ninh mạng, Nghị định 53/2022 và Luật Dữ liệu 2024. Đoàn kiểm tra cần bằng chứng chứ không chỉ cam kết."
      }
     },
     "solutions": [
      "email-security",
      "dlp"
     ],
     "response": {
      "title": {
       "en": "Data stays in Vietnam, controls leave evidence",
       "vi": "Dữ liệu ở lại Việt Nam, kiểm soát để lại bằng chứng"
      },
      "body": {
       "en": "VCLOUD keeps data on infrastructure in Vietnam, while data-loss controls and logs give the CIO a record to support audits and Decree 13 obligations. Final classification and certification remain the agency's responsibility.",
       "vi": "VCLOUD giữ dữ liệu trên hạ tầng tại Việt Nam, còn các kiểm soát chống thất thoát và nhật ký giúp CIO có hồ sơ phục vụ kiểm tra và nghĩa vụ theo Nghị định 13. Việc xác định cấp độ và thẩm định cuối cùng vẫn thuộc trách nhiệm của cơ quan."
      },
      "points": [
       {
        "en": "Sovereign hosting inside Vietnam",
        "vi": "Lưu trữ chủ quyền tại Việt Nam"
       },
       {
        "en": "Controls mapped to personal-data duties",
        "vi": "Kiểm soát gắn với nghĩa vụ bảo vệ dữ liệu cá nhân"
       },
       {
        "en": "Audit-ready logs and reports",
        "vi": "Nhật ký và báo cáo sẵn sàng cho kiểm tra"
       }
      ]
     }
    },
    {
     "id": "legal-ops",
     "persona": {
      "en": "Head of Legal & Administrative Affairs",
      "vi": "Trưởng phòng Pháp chế & Hành chính"
     },
     "challenge": {
      "title": {
       "en": "Legal documents multiplying faster than teams can read them",
       "vi": "Văn bản pháp luật tăng nhanh hơn khả năng đọc của đội ngũ"
      },
      "body": {
       "en": "Decrees, circulars and internal procedures change constantly. Reviewing drafts, contracts and administrative decisions by hand is slow, and sending them to public AI tools risks exposing non-public information.",
       "vi": "Nghị định, thông tư và quy trình nội bộ thay đổi liên tục. Rà soát dự thảo, hợp đồng và quyết định hành chính thủ công rất chậm, còn đưa tài liệu lên công cụ AI công cộng có nguy cơ lộ thông tin không công khai."
      }
     },
     "solutions": [
      "ai-legal"
     ],
     "response": {
      "title": {
       "en": "A legal assistant that stays inside your walls",
       "vi": "Trợ lý pháp lý chạy trong hệ thống của bạn"
      },
      "body": {
       "en": "The AI Legal assistant supports document and contract review against regulation, with an on-premise option so sensitive documents never leave the agency.",
       "vi": "Trợ lý AI Legal hỗ trợ rà soát văn bản, hợp đồng theo quy định hiện hành, có tùy chọn on-premise để tài liệu nhạy cảm không rời khỏi cơ quan."
      },
      "points": [
       {
        "en": "Speeds up routine review",
        "vi": "Rút ngắn rà soát thường nhật"
       },
       {
        "en": "On-premise option for privacy",
        "vi": "Tùy chọn on-premise bảo mật dữ liệu"
       },
       {
        "en": "Frees staff for judgement work",
        "vi": "Giải phóng cán bộ cho công việc cần phán đoán"
       }
      ]
     }
    }
   ],
   "outcomes": [
    {
     "title": {
      "en": "Protect Citizen Data & Public Trust",
      "vi": "Bảo vệ dữ liệu công dân & niềm tin xã hội"
     },
     "body": {
      "en": "Cover email, endpoints and databases so citizen and state data is protected from external attack and internal misuse.",
      "vi": "Bao phủ email, thiết bị đầu cuối và cơ sở dữ liệu để dữ liệu công dân và dữ liệu nhà nước được bảo vệ trước tấn công bên ngoài lẫn lạm dụng nội bộ."
     }
    },
    {
     "title": {
      "en": "Be Ready for Inspection",
      "vi": "Sẵn sàng cho thanh tra, kiểm tra"
     },
     "body": {
      "en": "Hosting in Vietnam, access controls and audit logs help agencies prepare evidence for security-level and data-protection reviews.",
      "vi": "Lưu trữ tại Việt Nam, kiểm soát truy cập và nhật ký kiểm toán giúp cơ quan chuẩn bị hồ sơ cho đánh giá cấp độ an toàn và bảo vệ dữ liệu."
     }
    },
    {
     "title": {
      "en": "Do More with Lean IT Teams",
      "vi": "Làm nhiều hơn với đội CNTT tinh gọn"
     },
     "body": {
      "en": "One integrated package from a local partner reduces vendor sprawl, manual review and incident-response effort.",
      "vi": "Một gói tích hợp từ đối tác trong nước giúp giảm số nhà cung cấp, rà soát thủ công và công sức xử lý sự cố."
     }
    }
   ],
   "faq": [
    {
     "q": {
      "en": "Does data stay in Vietnam?",
      "vi": "Dữ liệu có được lưu tại Việt Nam không?"
     },
     "a": {
      "en": "VCLOUD is hosted on infrastructure in Vietnam, and AI Legal offers an on-premise option. Confirm the exact deployment against your system's security level with the V-Tech Hub team.",
      "vi": "VCLOUD đặt trên hạ tầng tại Việt Nam, AI Legal có tùy chọn on-premise. Vui lòng xác nhận phương án triển khai cụ thể theo cấp độ an toàn hệ thống của đơn vị cùng đội ngũ V-Tech Hub."
     }
    },
    {
     "q": {
      "en": "How does this support Decree 13/2023 on personal data?",
      "vi": "Giải pháp hỗ trợ Nghị định 13/2023 về bảo vệ dữ liệu cá nhân thế nào?"
     },
     "a": {
      "en": "Data Loss Prevention detects personal data leaving via chat, webmail and USB, and Database Security masks sensitive fields and logs privileged access. These are technical controls that support, not replace, your own compliance process.",
      "vi": "DLP phát hiện dữ liệu cá nhân bị đưa ra qua chat, webmail, USB; Database Security che trường nhạy cảm và ghi nhật ký truy cập đặc quyền. Đây là các biện pháp kỹ thuật hỗ trợ, không thay thế quy trình tuân thủ của đơn vị."
     }
    },
    {
     "q": {
      "en": "Can the bundle be adopted in stages?",
      "vi": "Có thể triển khai theo từng giai đoạn không?"
     },
     "a": {
      "en": "Yes. Many agencies start with email protection or data-loss prevention and add database security and AI Legal as budgets and priorities allow.",
      "vi": "Có. Nhiều cơ quan bắt đầu từ bảo vệ email hoặc chống thất thoát dữ liệu rồi bổ sung bảo mật cơ sở dữ liệu và AI Legal theo ngân sách và mức ưu tiên."
     }
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
   "title": {
    "en": "Healthcare: Hospitals, Clinics, Pharma & Health Insurance",
    "vi": "Y tế: Bệnh viện, Phòng khám, Dược phẩm & Bảo hiểm sức khỏe"
   },
   "tagline": {
    "en": "VCLOUD & Email Security, Database Security, Data Loss Prevention and AI Legal & Compliance to protect patient records and keep care running.",
    "vi": "VCLOUD & Email Security, Bảo mật cơ sở dữ liệu, Chống thất thoát dữ liệu và AI Legal & Compliance để bảo vệ hồ sơ bệnh nhân và giữ vận hành khám chữa bệnh liên tục."
   },
   "bundle": [
    "email-security",
    "database-security",
    "dlp",
    "ai-legal"
   ],
   "image": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
   "regs": [
    {
     "en": "Decree 13/2023",
     "vi": "Nghị định 13/2023"
    },
    {
     "en": "Law on Data 2024",
     "vi": "Luật Dữ liệu 2024"
    },
    {
     "en": "Law on Medical Examination and Treatment",
     "vi": "Luật Khám bệnh, chữa bệnh"
    },
    {
     "en": "MoH EMR rules",
     "vi": "Quy định bệnh án điện tử của Bộ Y tế"
    }
   ],
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
   "chapters": [
    {
     "id": "ransomware",
     "persona": {
      "en": "Hospital CIO / Head of IT",
      "vi": "Giám đốc CNTT bệnh viện"
     },
     "challenge": {
      "title": {
       "en": "Ransomware That Stops the Wards",
       "vi": "Ransomware làm tê liệt khoa phòng"
      },
      "body": {
       "en": "One phishing email opened at a reception desk can encrypt servers behind the hospital information system. Registration, lab results and billing stop, staff fall back to paper, and patients wait. Public reports describe Vietnamese hospitals suffering exactly this.",
       "vi": "Chỉ một email phishing được mở ở quầy tiếp đón cũng có thể mã hóa máy chủ của hệ thống thông tin bệnh viện. Tiếp đón, kết quả xét nghiệm và viện phí dừng lại, nhân viên quay về giấy tờ, người bệnh phải chờ. Báo chí đã đưa tin một số bệnh viện tại Việt Nam gặp đúng tình huống này."
      }
     },
     "solutions": [
      "email-security"
     ],
     "response": {
      "title": {
       "en": "Stop the first click, keep data in Vietnam",
       "vi": "Chặn cú click đầu tiên, giữ dữ liệu tại Việt Nam"
      },
      "body": {
       "en": "Advanced email defense on VCLOUD filters phishing and ransomware attachments before they reach clinical and admin staff, on infrastructure hosted inside Vietnam.",
       "vi": "Bảo vệ email nâng cao trên VCLOUD lọc phishing và tệp đính kèm ransomware trước khi tới nhân viên y tế và hành chính, trên hạ tầng đặt tại Việt Nam."
      },
      "points": [
       {
        "en": "Blocks phishing and spoofed senders",
        "vi": "Chặn phishing và giả mạo người gửi"
       },
       {
        "en": "Stops ransomware at the mail gateway",
        "vi": "Ngăn ransomware ngay tại cổng email"
       },
       {
        "en": "Sovereign hosting inside Vietnam",
        "vi": "Lưu trữ chủ quyền ngay tại Việt Nam"
       }
      ]
     }
    },
    {
     "id": "records-access",
     "persona": {
      "en": "Head of HIS / EMR & DBA Lead",
      "vi": "Trưởng phòng HIS / bệnh án điện tử & DBA"
     },
     "challenge": {
      "title": {
       "en": "Too Many People Can Open the Patient Record",
       "vi": "Quá nhiều người có thể mở hồ sơ bệnh án"
      },
      "body": {
       "en": "Electronic medical records are touched by clinicians, administrators, software vendors and outsourced maintenance staff. Without query-level control, a privileged account can read or export diagnoses of staff, officials or public figures and nobody notices until it surfaces online.",
       "vi": "Bệnh án điện tử được nhiều đối tượng truy cập: bác sĩ, quản trị viên, nhà cung cấp phần mềm và đơn vị bảo trì thuê ngoài. Thiếu kiểm soát ở mức truy vấn, một tài khoản đặc quyền có thể đọc hoặc xuất chẩn đoán của nhân viên, cán bộ hay người nổi tiếng mà không ai hay biết cho đến khi dữ liệu xuất hiện trên mạng."
      }
     },
     "solutions": [
      "database-security"
     ],
     "response": {
      "title": {
       "en": "Every query seen, every diagnosis masked",
       "vi": "Mọi truy vấn đều được thấy, mọi chẩn đoán đều được che"
      },
      "body": {
       "en": "Query-level access control and real-time masking let each role see only what care requires, and leave an audit trail for vendor and admin sessions, without slowing the HIS.",
       "vi": "Kiểm soát truy cập mức truy vấn và che giấu dữ liệu thời gian thực giúp mỗi vai trò chỉ thấy phần dữ liệu cần cho điều trị, đồng thời lưu nhật ký cho phiên của nhà cung cấp và quản trị viên mà không làm chậm HIS."
      },
      "points": [
       {
        "en": "Proxy gateway restricts direct database access",
        "vi": "Cổng proxy hạn chế truy cập trực tiếp CSDL"
       },
       {
        "en": "Patient identity and diagnosis masked for unauthorized users",
        "vi": "Che danh tính và chẩn đoán với người không có quyền"
       },
       {
        "en": "Full audit trail of vendor and admin sessions",
        "vi": "Nhật ký đầy đủ phiên của nhà cung cấp và quản trị viên"
       }
      ]
     }
    },
    {
     "id": "leak",
     "persona": {
      "en": "Data Protection Officer / Head of Compliance",
      "vi": "Cán bộ bảo vệ dữ liệu / Trưởng phòng tuân thủ"
     },
     "challenge": {
      "title": {
       "en": "Patient Data Walking Out the Door",
       "vi": "Dữ liệu bệnh nhân bị mang ra ngoài"
      },
      "body": {
       "en": "Lab reports sent by personal chat apps, files copied to USB drives, records forwarded to private webmail: well-meaning staff create leaks daily. Health data is sensitive data under Decree 13/2023, and reported cases of patient records offered for sale show the reputational cost.",
       "vi": "Kết quả xét nghiệm gửi qua ứng dụng chat cá nhân, tệp chép ra USB, hồ sơ chuyển sang webmail riêng: nhân viên có thiện chí vẫn tạo ra rò rỉ mỗi ngày. Dữ liệu sức khỏe là dữ liệu nhạy cảm theo Nghị định 13/2023/NĐ-CP, và các vụ hồ sơ bệnh nhân bị rao bán được đưa tin cho thấy thiệt hại về uy tín."
      }
     },
     "solutions": [
      "dlp"
     ],
     "response": {
      "title": {
       "en": "See sensitive records wherever they try to leave",
       "vi": "Thấy hồ sơ nhạy cảm ở mọi nơi chúng cố rời đi"
      },
      "body": {
       "en": "360-degree monitoring across chat apps, personal webmail and USB drives detects patient records automatically, stops insider leaks and supports Decree 13 compliance.",
       "vi": "Giám sát 360° trên ứng dụng chat, webmail cá nhân và USB tự động nhận diện hồ sơ bệnh nhân, ngăn rò rỉ từ nội bộ và hỗ trợ tuân thủ Nghị định 13."
      },
      "points": [
       {
        "en": "Covers chat, webmail and USB",
        "vi": "Bao phủ chat, webmail và USB"
       },
       {
        "en": "Auto-detects patient and insurance records",
        "vi": "Tự nhận diện hồ sơ bệnh nhân và bảo hiểm"
       },
       {
        "en": "Evidence ready for audits and incident reports",
        "vi": "Bằng chứng sẵn sàng cho kiểm toán và báo cáo sự cố"
       }
      ]
     }
    },
    {
     "id": "insurance-docs",
     "persona": {
      "en": "Head of Health Insurance Claims / Legal",
      "vi": "Trưởng bộ phận giám định bảo hiểm / Pháp chế"
     },
     "challenge": {
      "title": {
       "en": "Claims and Contracts Reviewed by Hand",
       "vi": "Hợp đồng và hồ sơ bồi thường rà soát thủ công"
      },
      "body": {
       "en": "Insurance contracts, supplier agreements and consent forms must be read line by line against changing health, data and insurance rules. The backlog slows reimbursement and puts pressure on a small legal team.",
       "vi": "Hợp đồng bảo hiểm, hợp đồng nhà cung cấp và mẫu đồng ý xử lý dữ liệu phải đọc từng điều khoản theo quy định y tế, dữ liệu và bảo hiểm luôn thay đổi. Tồn đọng làm chậm chi trả và tạo áp lực lên đội pháp chế vốn mỏng."
      }
     },
     "solutions": [
      "ai-legal"
     ],
     "response": {
      "title": {
       "en": "Review faster without moving documents out",
       "vi": "Rà soát nhanh hơn mà không đưa tài liệu ra ngoài"
      },
      "body": {
       "en": "An AI assistant for contract and regulation review, with an on-premise option so sensitive documents stay inside your own environment. Regulatory coverage for health rules should be scoped with V-Tech Hub during assessment.",
       "vi": "Trợ lý AI rà soát hợp đồng và quy định, có tùy chọn on-premise để tài liệu nhạy cảm nằm trong hệ thống của bạn. Phạm vi quy định ngành y tế cần được xác nhận cùng V-Tech Hub khi khảo sát."
      },
      "points": [
       {
        "en": "Automated contract and clause review",
        "vi": "Tự động rà soát hợp đồng và điều khoản"
       },
       {
        "en": "On-premise option for total privacy",
        "vi": "Tùy chọn on-premise bảo mật tuyệt đối"
       },
       {
        "en": "Frees legal staff for complex cases",
        "vi": "Giải phóng pháp chế cho ca phức tạp"
       }
      ]
     }
    },
    {
     "id": "sovereignty",
     "persona": {
      "en": "CFO / Board Sponsor",
      "vi": "Giám đốc Tài chính / Lãnh đạo phụ trách"
     },
     "challenge": {
      "title": {
       "en": "Compliance Cost and Data Residency",
       "vi": "Chi phí tuân thủ và vị trí lưu trữ dữ liệu"
      },
      "body": {
       "en": "The Law on Data 2024, Decree 13 and the Law on Medical Examination and Treatment all raise expectations on how health data is stored and protected. Leaders want one accountable partner instead of five vendors, and a clear budget line.",
       "vi": "Luật Dữ liệu 2024, Nghị định 13 và Luật Khám bệnh, chữa bệnh đều nâng yêu cầu về cách lưu trữ và bảo vệ dữ liệu sức khỏe. Ban lãnh đạo cần một đối tác chịu trách nhiệm thay vì năm nhà cung cấp, và một khoản ngân sách rõ ràng."
      }
     },
     "solutions": [
      "email-security",
      "dlp",
      "database-security"
     ],
     "response": {
      "title": {
       "en": "One integrated package, hosted in Vietnam",
       "vi": "Một gói tích hợp, đặt tại Việt Nam"
      },
      "body": {
       "en": "Email defense, data-loss prevention and database security work together on VCLOUD infrastructure in Vietnam, giving one partner, one audit story and a predictable scope.",
       "vi": "Bảo vệ email, chống thất thoát dữ liệu và bảo mật cơ sở dữ liệu phối hợp trên hạ tầng VCLOUD tại Việt Nam, với một đối tác, một câu chuyện kiểm toán và phạm vi dự toán rõ ràng."
      },
      "points": [
       {
        "en": "Single accountable partner",
        "vi": "Một đối tác chịu trách nhiệm"
       },
       {
        "en": "Data hosted inside Vietnam",
        "vi": "Dữ liệu đặt tại Việt Nam"
       },
       {
        "en": "Consistent evidence across layers",
        "vi": "Bằng chứng nhất quán trên mọi lớp"
       }
      ]
     }
    }
   ],
   "outcomes": [
    {
     "title": {
      "en": "Keep Care Running",
      "vi": "Giữ vận hành khám chữa bệnh liên tục"
     },
     "body": {
      "en": "Cut the most common entry points for ransomware so registration, labs and billing stay available to patients.",
      "vi": "Giảm các cửa ngõ phổ biến của ransomware để tiếp đón, xét nghiệm và viện phí luôn sẵn sàng phục vụ người bệnh."
     }
    },
    {
     "title": {
      "en": "Protect Patient Trust",
      "vi": "Bảo vệ niềm tin người bệnh"
     },
     "body": {
      "en": "Control who can see, copy or send patient records across email, devices and databases, with evidence for every access.",
      "vi": "Kiểm soát ai được xem, sao chép hoặc gửi hồ sơ bệnh nhân qua email, thiết bị và cơ sở dữ liệu, có bằng chứng cho mọi lần truy cập."
     }
    },
    {
     "title": {
      "en": "Prepare for Compliance",
      "vi": "Chuẩn bị cho tuân thủ"
     },
     "body": {
      "en": "Sovereign hosting and data controls help hospitals prepare for Decree 13, the Law on Data and sector audits.",
      "vi": "Lưu trữ chủ quyền và các kiểm soát dữ liệu giúp bệnh viện chuẩn bị cho Nghị định 13, Luật Dữ liệu và các đợt kiểm tra ngành."
     }
    }
   ],
   "faq": [
    {
     "q": {
      "en": "Is health data really treated as sensitive under Vietnamese law?",
      "vi": "Dữ liệu sức khỏe có thực sự là dữ liệu nhạy cảm theo pháp luật Việt Nam?"
     },
     "a": {
      "en": "Yes. Decree 13/2023/ND-CP lists health and medical-record information as sensitive personal data, which requires stricter protection measures and impact assessment. Confirm exact obligations with your legal counsel.",
      "vi": "Có. Nghị định 13/2023/NĐ-CP xếp thông tin sức khỏe, tình trạng bệnh án là dữ liệu cá nhân nhạy cảm, đòi hỏi biện pháp bảo vệ chặt chẽ hơn và đánh giá tác động xử lý dữ liệu. Nên xác nhận nghĩa vụ cụ thể với tư vấn pháp lý của đơn vị."
     }
    },
    {
     "q": {
      "en": "How do you protect the HIS and EMR database from vendor and admin accounts?",
      "vi": "Làm sao bảo vệ CSDL HIS và bệnh án điện tử trước tài khoản nhà cung cấp và quản trị viên?"
     },
     "a": {
      "en": "Database Security restricts direct access through a proxy gateway, controls access per query, masks sensitive fields in real time and records every session for audit.",
      "vi": "Giải pháp Bảo mật cơ sở dữ liệu hạn chế truy cập trực tiếp qua cổng proxy, kiểm soát theo từng truy vấn, che giấu trường nhạy cảm theo thời gian thực và ghi lại mọi phiên để kiểm toán."
     }
    },
    {
     "q": {
      "en": "Can patient data stay inside Vietnam?",
      "vi": "Dữ liệu bệnh nhân có thể nằm hoàn toàn tại Việt Nam không?"
     },
     "a": {
      "en": "VCLOUD is hosted in Vietnam, and the AI Legal assistant offers an on-premise option for documents that must not leave your network.",
      "vi": "VCLOUD đặt tại Việt Nam, và trợ lý AI Legal có tùy chọn on-premise cho tài liệu không được rời khỏi mạng nội bộ."
     }
    },
    {
     "q": {
      "en": "Where do we start if budget is limited?",
      "vi": "Nên bắt đầu từ đâu nếu ngân sách hạn chế?"
     },
     "a": {
      "en": "Most hospitals start with email defense and the HIS database, the two most exposed layers, then add data-loss prevention. V-Tech Hub can scope a phased plan.",
      "vi": "Đa số bệnh viện bắt đầu từ bảo vệ email và CSDL HIS, hai lớp dễ bị tấn công nhất, rồi bổ sung chống thất thoát dữ liệu. V-Tech Hub có thể xây dựng lộ trình theo giai đoạn."
     }
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
   "title": {
    "en": "Retail & E-Commerce",
    "vi": "Bán lẻ & Thương mại điện tử"
   },
   "tagline": {
    "en": "Anti-DDoS & CDN, Web Application Firewall, sovereign VCLOUD, Data Loss Prevention and AI Legal & Compliance for always-on selling.",
    "vi": "Chống DDoS & CDN, tường lửa ứng dụng web, VCLOUD chủ quyền, chống thất thoát dữ liệu và AI Legal & Compliance để bán hàng không gián đoạn."
   },
   "bundle": [
    "anti-ddos-cdn",
    "web-waf",
    "email-security",
    "dlp",
    "ai-legal",
    "ai-agent"
   ],
   "image": "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1200&q=80",
   "regs": [
    {
     "en": "Decree 13",
     "vi": "Nghị định 13"
    },
    {
     "en": "PCI DSS",
     "vi": "PCI DSS"
    },
    {
     "en": "Law on Cybersecurity",
     "vi": "Luật An ninh mạng"
    },
    {
     "en": "Law on Consumer Protection",
     "vi": "Luật Bảo vệ quyền lợi người tiêu dùng"
    }
   ],
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
   "chapters": [
    {
     "id": "peak-ddos",
     "persona": {
      "en": "CTO / Head of E-Commerce Platform",
      "vi": "CTO / Giám đốc nền tảng thương mại điện tử"
     },
     "challenge": {
      "title": {
       "en": "Peak-Sale Traffic and DDoS Attacks",
       "vi": "Lưu lượng đỉnh điểm và tấn công DDoS ngày sale"
      },
      "body": {
       "en": "At midnight on a flash-sale day, traffic spikes tenfold. It is hard to tell real shoppers from a DDoS attack aimed at taking you offline while a competitor's campaign runs. Every minute of downtime is lost orders and wasted ad spend.",
       "vi": "Đúng 0 giờ ngày flash sale, lưu lượng tăng vọt gấp nhiều lần. Rất khó phân biệt khách mua thật với một đợt DDoS nhằm đánh sập hệ thống đúng lúc đối thủ chạy chiến dịch. Mỗi phút gián đoạn là đơn hàng mất đi và ngân sách quảng cáo đổ bỏ."
      }
     },
     "solutions": [
      "anti-ddos-cdn"
     ],
     "response": {
      "title": {
       "en": "Absorb the attack, keep selling",
       "vi": "Hấp thụ tấn công, bán hàng không ngừng"
      },
      "body": {
       "en": "Anti-DDoS filtering and a CDN sit in front of your storefront, scrubbing malicious traffic and serving images and static content closer to shoppers so the origin stays free for orders.",
       "vi": "Lớp chống DDoS và CDN đặt trước website bán hàng, lọc lưu lượng độc hại và phân phối hình ảnh, nội dung tĩnh gần người mua hơn, để máy chủ gốc dành sức cho việc xử lý đơn hàng."
      },
      "points": [
       {
        "en": "Scrubs attack traffic before it reaches your origin",
        "vi": "Lọc lưu lượng tấn công trước khi tới máy chủ gốc"
       },
       {
        "en": "CDN offloads images and static content at peak",
        "vi": "CDN gánh hình ảnh và nội dung tĩnh lúc cao điểm"
       },
       {
        "en": "Stays up while real shoppers keep checking out",
        "vi": "Hệ thống vẫn chạy khi khách thật tiếp tục thanh toán"
       }
      ]
     }
    },
    {
     "id": "bots-ato",
     "persona": {
      "en": "Head of Digital & Customer Experience",
      "vi": "Giám đốc Số & Trải nghiệm khách hàng"
     },
     "challenge": {
      "title": {
       "en": "Bots, Account Takeover and Promotion Abuse",
       "vi": "Bot, chiếm tài khoản và lạm dụng khuyến mãi"
      },
      "body": {
       "en": "Credential-stuffing bots take over loyalty accounts and drain points, while scripts grab limited stock and vouchers before real customers can. Marketing budget leaks away and loyal shoppers complain.",
       "vi": "Bot dò mật khẩu chiếm tài khoản thành viên và rút điểm thưởng, trong khi script vét sạch hàng giới hạn và voucher trước khi khách thật kịp mua. Ngân sách marketing thất thoát, khách hàng thân thiết phàn nàn."
      }
     },
     "solutions": [
      "web-waf"
     ],
     "response": {
      "title": {
       "en": "Stop automated abuse at the edge",
       "vi": "Chặn lạm dụng tự động ngay từ lớp ngoài cùng"
      },
      "body": {
       "en": "A web application firewall inspects requests to login, cart and promotion endpoints, blocking injection attacks and abusive automation while letting genuine customers through.",
       "vi": "Tường lửa ứng dụng web kiểm tra yêu cầu vào các điểm đăng nhập, giỏ hàng và khuyến mãi, chặn tấn công injection và tự động hóa lạm dụng nhưng vẫn cho khách thật đi qua."
      },
      "points": [
       {
        "en": "Protects login, cart and voucher endpoints",
        "vi": "Bảo vệ đăng nhập, giỏ hàng và voucher"
       },
       {
        "en": "Blocks common web attacks such as SQL injection and XSS",
        "vi": "Chặn tấn công web phổ biến như SQL injection, XSS"
       },
       {
        "en": "Rules tuned per campaign without code changes",
        "vi": "Điều chỉnh luật theo từng chiến dịch, không sửa code"
       }
      ]
     }
    },
    {
     "id": "customer-data",
     "persona": {
      "en": "Chief Compliance Officer / DPO",
      "vi": "Giám đốc Tuân thủ / Cán bộ bảo vệ dữ liệu cá nhân"
     },
     "challenge": {
      "title": {
       "en": "Customer Data and Decree 13 Exposure",
       "vi": "Dữ liệu khách hàng và rủi ro theo Nghị định 13"
      },
      "body": {
       "en": "Retailers hold phone numbers, addresses, purchase history and loyalty data across CRM, marketing agencies and store staff. Customer lists exported to personal email or USB are a common leak path, and Decree 13 puts the responsibility on you.",
       "vi": "Doanh nghiệp bán lẻ nắm số điện thoại, địa chỉ, lịch sử mua hàng và dữ liệu thành viên rải khắp CRM, đối tác marketing và nhân viên cửa hàng. Danh sách khách hàng xuất ra email cá nhân hay USB là đường rò rỉ rất phổ biến, và Nghị định 13 đặt trách nhiệm lên doanh nghiệp."
      }
     },
     "solutions": [
      "dlp"
     ],
     "response": {
      "title": {
       "en": "Know where customer data goes",
       "vi": "Biết dữ liệu khách hàng đang đi đâu"
      },
      "body": {
       "en": "360-degree monitoring across chat apps, personal webmail and USB drives automatically detects customer records leaving the company, helping prevent insider leaks and supporting Decree 13 compliance.",
       "vi": "Giám sát 360° trên ứng dụng chat, webmail cá nhân và USB tự động nhận diện hồ sơ khách hàng bị đưa ra ngoài, giúp ngăn rò rỉ nội bộ và hỗ trợ tuân thủ Nghị định 13."
      },
      "points": [
       {
        "en": "Covers chat, webmail and USB",
        "vi": "Bao phủ chat, webmail và USB"
       },
       {
        "en": "Auto-detects customer and loyalty records",
        "vi": "Tự nhận diện dữ liệu khách hàng và thành viên"
       },
       {
        "en": "Evidence ready for audits",
        "vi": "Bằng chứng sẵn sàng cho kiểm toán"
       }
      ]
     }
    },
    {
     "id": "payment-cloud",
     "persona": {
      "en": "CFO / CIO",
      "vi": "Giám đốc Tài chính / Giám đốc CNTT"
     },
     "challenge": {
      "title": {
       "en": "Payment Data, PCI DSS and Fragile Hosting",
       "vi": "Dữ liệu thanh toán, PCI DSS và hạ tầng thiếu vững chắc"
      },
      "body": {
       "en": "Card and payment data raises PCI DSS obligations, and phishing mail aimed at finance and procurement teams is a standard route to fraudulent supplier payments. Hosting that cannot scale or keep data in-country adds cost and audit risk.",
       "vi": "Dữ liệu thẻ và thanh toán kéo theo nghĩa vụ PCI DSS, còn email phishing nhắm vào kế toán, mua hàng là đường quen thuộc dẫn tới chuyển tiền nhầm cho nhà cung cấp giả mạo. Hạ tầng không co giãn được hoặc không giữ dữ liệu trong nước làm tăng chi phí và rủi ro kiểm toán."
      }
     },
     "solutions": [
      "email-security"
     ],
     "response": {
      "title": {
       "en": "Sovereign cloud with a protected inbox",
       "vi": "Đám mây chủ quyền cùng hộp thư được bảo vệ"
      },
      "body": {
       "en": "VCLOUD hosts commerce workloads with data kept inside Vietnam, and advanced email defense filters phishing, spoofed supplier invoices and ransomware before they reach your teams.",
       "vi": "VCLOUD lưu trữ hệ thống thương mại với dữ liệu nằm tại Việt Nam, còn bảo vệ email nâng cao lọc phishing, hóa đơn nhà cung cấp giả mạo và ransomware trước khi tới nhân viên."
      },
      "points": [
       {
        "en": "Sovereign hosting inside Vietnam",
        "vi": "Lưu trữ chủ quyền ngay tại Việt Nam"
       },
       {
        "en": "Filters fake supplier and payment requests",
        "vi": "Lọc yêu cầu thanh toán, nhà cung cấp giả"
       },
       {
        "en": "Stops ransomware at the mail gateway",
        "vi": "Ngăn ransomware ngay tại cổng email"
       }
      ]
     }
    },
    {
     "id": "contracts",
     "persona": {
      "en": "Head of Legal & Procurement",
      "vi": "Trưởng bộ phận Pháp chế & Mua hàng"
     },
     "challenge": {
      "title": {
       "en": "Supplier, Landlord and Platform Contracts at Scale",
       "vi": "Hợp đồng nhà cung cấp, mặt bằng và sàn ở quy mô lớn"
      },
      "body": {
       "en": "A retail group manages hundreds of supplier, lease, marketplace and franchise contracts, plus changing rules on consumer protection and personal data. Manual review slows new store openings and vendor onboarding.",
       "vi": "Một tập đoàn bán lẻ phải quản lý hàng trăm hợp đồng nhà cung cấp, thuê mặt bằng, sàn thương mại điện tử và nhượng quyền, cùng các quy định về bảo vệ người tiêu dùng và dữ liệu cá nhân luôn thay đổi. Rà soát thủ công làm chậm việc mở cửa hàng mới và đưa nhà cung cấp vào hệ thống."
      }
     },
     "solutions": [
      "ai-legal"
     ],
     "response": {
      "title": {
       "en": "Review contracts in minutes, not days",
       "vi": "Rà soát hợp đồng trong vài phút thay vì vài ngày"
      },
      "body": {
       "en": "An AI legal assistant automates contract review and flags risky clauses, with an on-premise option so commercial terms and supplier pricing never leave your walls.",
       "vi": "Trợ lý AI pháp lý tự động rà soát hợp đồng và đánh dấu điều khoản rủi ro, có tùy chọn on-premise để điều khoản thương mại và giá nhà cung cấp không rời khỏi hệ thống của bạn."
      },
      "points": [
       {
        "en": "Automated clause review",
        "vi": "Tự động rà soát điều khoản"
       },
       {
        "en": "On-premise option for total privacy",
        "vi": "Tùy chọn on-premise bảo mật tuyệt đối"
       },
       {
        "en": "Frees legal teams for high-value work",
        "vi": "Giải phóng đội pháp chế cho việc giá trị cao"
       }
      ]
     }
    }
   ],
   "outcomes": [
    {
     "title": {
      "en": "Sell Without Interruption",
      "vi": "Bán hàng không gián đoạn"
     },
     "body": {
      "en": "Keep the storefront and checkout available during the campaigns that matter most, protected from DDoS and automated abuse.",
      "vi": "Giữ website và thanh toán luôn sẵn sàng trong những chiến dịch quan trọng nhất, được bảo vệ khỏi DDoS và lạm dụng tự động."
     }
    },
    {
     "title": {
      "en": "Protect Customer Trust and Compliance",
      "vi": "Bảo vệ niềm tin khách hàng và tuân thủ"
     },
     "body": {
      "en": "Safeguard customer and payment data across email, users and infrastructure, and be ready for Decree 13 and PCI DSS expectations.",
      "vi": "Bảo vệ dữ liệu khách hàng và thanh toán trên email, người dùng và hạ tầng, sẵn sàng cho yêu cầu của Nghị định 13 và PCI DSS."
     }
    },
    {
     "title": {
      "en": "Lower Risk and Operating Cost",
      "vi": "Giảm rủi ro và chi phí vận hành"
     },
     "body": {
      "en": "One local partner for cloud, edge protection, data and legal automation reduces vendor sprawl, manual work and incident-response effort.",
      "vi": "Một đối tác trong nước cho đám mây, bảo vệ lớp ngoài, dữ liệu và tự động hóa pháp chế giúp giảm số nhà cung cấp, công việc thủ công và nỗ lực ứng phó sự cố."
     }
    }
   ],
   "faq": [
    {
     "q": {
      "en": "Do we need to move our e-commerce platform to protect it from DDoS?",
      "vi": "Chúng tôi có cần chuyển hệ thống thương mại điện tử sang nơi khác để chống DDoS không?"
     },
     "a": {
      "en": "Not necessarily. Anti-DDoS and CDN protection sits in front of your existing site, wherever it is hosted. VCLOUD is available if you also want sovereign hosting inside Vietnam.",
      "vi": "Không nhất thiết. Lớp chống DDoS và CDN đặt phía trước website hiện có, dù đang lưu trữ ở đâu. VCLOUD là lựa chọn bổ sung nếu bạn muốn lưu trữ chủ quyền tại Việt Nam."
     }
    },
    {
     "q": {
      "en": "Does this help with PCI DSS?",
      "vi": "Giải pháp có hỗ trợ PCI DSS không?"
     },
     "a": {
      "en": "A web application firewall, data monitoring and secure hosting support several PCI DSS control areas. Certification itself depends on your whole payment environment and assessor, so we scope it with you.",
      "vi": "Tường lửa ứng dụng web, giám sát dữ liệu và hạ tầng an toàn hỗ trợ nhiều nhóm kiểm soát của PCI DSS. Việc đạt chứng nhận phụ thuộc toàn bộ môi trường thanh toán và đơn vị đánh giá, nên chúng tôi cùng bạn xác định phạm vi."
     }
    },
    {
     "q": {
      "en": "How do we handle customer data under Decree 13?",
      "vi": "Làm thế nào để xử lý dữ liệu khách hàng theo Nghị định 13?"
     },
     "a": {
      "en": "Data Loss Prevention discovers and monitors customer records leaving through chat, webmail and USB, and VCLOUD keeps data inside Vietnam, giving you evidence for audits and incident response.",
      "vi": "Giải pháp chống thất thoát dữ liệu phát hiện và giám sát hồ sơ khách hàng đi ra qua chat, webmail, USB, còn VCLOUD giữ dữ liệu tại Việt Nam, giúp bạn có bằng chứng cho kiểm toán và ứng phó sự cố."
     }
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
   "title": {
    "en": "Manufacturing & Industrial Supply Chain",
    "vi": "Sản xuất & Chuỗi cung ứng công nghiệp"
   },
   "tagline": {
    "en": "VCLOUD & Email Security, Database Security and Data Loss Prevention to keep production lines running and designs protected.",
    "vi": "VCLOUD & Email Security, Bảo mật cơ sở dữ liệu và Chống thất thoát dữ liệu để dây chuyền luôn chạy và bản thiết kế luôn an toàn."
   },
   "bundle": [
    "email-security",
    "database-security",
    "dlp"
   ],
   "image": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
   "regs": [
    {
     "en": "Decree 13",
     "vi": "Nghị định 13"
    },
    {
     "en": "Cybersecurity Law",
     "vi": "Luật An ninh mạng"
    },
    {
     "en": "ISO 27001",
     "vi": "ISO 27001"
    },
    {
     "en": "Customer security audits",
     "vi": "Đánh giá an ninh của khách hàng"
    }
   ],
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
   "chapters": [
    {
     "id": "ransomware",
     "persona": {
      "en": "CIO / Head of IT",
      "vi": "Giám đốc CNTT"
     },
     "challenge": {
      "title": {
       "en": "Ransomware That Stops the Line",
       "vi": "Ransomware làm dừng dây chuyền"
      },
      "body": {
       "en": "A single phishing email opened in the office network can spread to ERP and production systems. When orders cannot be processed and shipments are delayed, every hour of downtime turns into penalties and lost customer trust.",
       "vi": "Chỉ một email phishing được mở trên mạng văn phòng cũng có thể lan sang ERP và hệ thống sản xuất. Khi đơn hàng không xử lý được và lô hàng trễ hạn, mỗi giờ ngừng trệ đều trở thành tiền phạt và mất niềm tin của khách hàng."
      }
     },
     "solutions": [
      "email-security"
     ],
     "response": {
      "title": {
       "en": "Stop the entry point before it reaches the office",
       "vi": "Chặn cửa ngõ trước khi vào văn phòng"
      },
      "body": {
       "en": "Advanced email defense on VCLOUD blocks phishing, spoofed supplier invoices and ransomware at the gateway, while business data is hosted inside Vietnam.",
       "vi": "Bảo vệ email nâng cao trên VCLOUD chặn phishing, hóa đơn nhà cung cấp giả mạo và ransomware ngay tại cổng, trong khi dữ liệu doanh nghiệp được lưu trữ tại Việt Nam."
      },
      "points": [
       {
        "en": "Blocks phishing and executive or supplier spoofing",
        "vi": "Chặn phishing, giả mạo lãnh đạo và nhà cung cấp"
       },
       {
        "en": "Stops ransomware at the mail gateway",
        "vi": "Ngăn ransomware ngay tại cổng email"
       },
       {
        "en": "Sovereign hosting inside Vietnam",
        "vi": "Lưu trữ chủ quyền ngay tại Việt Nam"
       }
      ]
     }
    },
    {
     "id": "ip-leak",
     "persona": {
      "en": "CTO / Head of R&D",
      "vi": "Giám đốc Công nghệ / Trưởng R&D"
     },
     "challenge": {
      "title": {
       "en": "Designs and Formulas Walking Out the Door",
       "vi": "Bản thiết kế, công thức bị mang ra ngoài"
      },
      "body": {
       "en": "CAD files, process recipes and BOMs are the core value of a plant. They can leave through USB drives, personal webmail or chat apps, whether by a departing engineer or by an honest mistake.",
       "vi": "File CAD, công thức quy trình và BOM là giá trị cốt lõi của nhà máy. Chúng có thể rời đi qua USB, webmail cá nhân hoặc ứng dụng chat, do kỹ sư nghỉ việc hoặc chỉ vì sơ suất."
      }
     },
     "solutions": [
      "dlp"
     ],
     "response": {
      "title": {
       "en": "See sensitive files wherever they try to leave",
       "vi": "Thấy file nhạy cảm ở mọi nơi chúng cố rời đi"
      },
      "body": {
       "en": "360-degree monitoring across chat apps, personal webmail and USB drives detects sensitive documents automatically and stops leaks before they reach a competitor.",
       "vi": "Giám sát 360° trên ứng dụng chat, webmail cá nhân và USB tự động nhận diện tài liệu nhạy cảm và ngăn rò rỉ trước khi tới tay đối thủ."
      },
      "points": [
       {
        "en": "Covers chat, webmail and USB",
        "vi": "Bao phủ chat, webmail và USB"
       },
       {
        "en": "Auto-detects sensitive documents",
        "vi": "Tự nhận diện tài liệu nhạy cảm"
       },
       {
        "en": "Evidence trail for investigations",
        "vi": "Bằng chứng phục vụ điều tra"
       }
      ]
     }
    },
    {
     "id": "erp-data",
     "persona": {
      "en": "Head of ERP / MES & DBA",
      "vi": "Trưởng bộ phận ERP / MES & DBA"
     },
     "challenge": {
      "title": {
       "en": "ERP and MES Data Open to Too Many Hands",
       "vi": "Dữ liệu ERP và MES quá nhiều người chạm tới"
      },
      "body": {
       "en": "Production plans, costs, pricing and customer orders sit in ERP and MES databases that administrators, developers and integrators can reach directly. Without query-level control, a mistake or misuse may go unnoticed.",
       "vi": "Kế hoạch sản xuất, giá thành, báo giá và đơn hàng nằm trong CSDL ERP, MES mà quản trị viên, lập trình viên và đơn vị tích hợp có thể truy cập trực tiếp. Thiếu kiểm soát mức truy vấn, sai sót hoặc lạm quyền có thể không bị phát hiện."
      }
     },
     "solutions": [
      "database-security"
     ],
     "response": {
      "title": {
       "en": "Every query seen, every sensitive field masked",
       "vi": "Mọi truy vấn đều được thấy, trường nhạy cảm đều được che"
      },
      "body": {
       "en": "Query-level access control and real-time data masking protect ERP and MES data without slowing live operations.",
       "vi": "Kiểm soát truy cập mức truy vấn và che giấu dữ liệu thời gian thực bảo vệ dữ liệu ERP, MES mà không làm chậm vận hành."
      },
      "points": [
       {
        "en": "Restricts direct database access",
        "vi": "Hạn chế truy cập trực tiếp vào CSDL"
       },
       {
        "en": "Masks costs and pricing from unauthorized admins",
        "vi": "Che giá thành, báo giá với quản trị viên không có quyền"
       },
       {
        "en": "Audit trail for every change",
        "vi": "Nhật ký kiểm toán mọi thay đổi"
       }
      ]
     }
    },
    {
     "id": "vendor-access",
     "persona": {
      "en": "Head of IT Infrastructure",
      "vi": "Trưởng bộ phận Hạ tầng CNTT"
     },
     "challenge": {
      "title": {
       "en": "Remote Vendors with Standing Access",
       "vi": "Nhà cung cấp truy cập từ xa thường trực"
      },
      "body": {
       "en": "Machine makers, system integrators and software vendors often need remote access to support the plant. Broad, long-lived access to databases turns a third party into the weakest link.",
       "vi": "Hãng máy, đơn vị tích hợp và nhà cung cấp phần mềm thường cần truy cập từ xa để hỗ trợ nhà máy. Quyền truy cập rộng và kéo dài vào cơ sở dữ liệu biến bên thứ ba thành mắt xích yếu nhất."
      }
     },
     "solutions": [
      "database-security",
      "email-security"
     ],
     "response": {
      "title": {
       "en": "Give vendors a controlled door, not a key",
       "vi": "Cho nhà cung cấp một cửa có kiểm soát, không phải chìa khóa"
      },
      "body": {
       "en": "Vendor sessions to databases go through a controlled gateway with approval for sensitive actions, while mail defense filters the invoices and attachments that vendors send in.",
       "vi": "Phiên truy cập CSDL của nhà cung cấp đi qua cổng kiểm soát với phê duyệt cho thao tác nhạy cảm, còn lớp bảo vệ email lọc hóa đơn và tệp đính kèm họ gửi đến."
      },
      "points": [
       {
        "en": "Approval workflow for sensitive actions",
        "vi": "Quy trình phê duyệt cho thao tác nhạy cảm"
       },
       {
        "en": "Full record of what vendors did",
        "vi": "Ghi lại đầy đủ những gì nhà cung cấp đã làm"
       },
       {
        "en": "Filters inbound vendor attachments",
        "vi": "Lọc tệp đính kèm từ nhà cung cấp"
       }
      ]
     }
    },
    {
     "id": "audit",
     "persona": {
      "en": "CFO / Compliance Lead",
      "vi": "Giám đốc Tài chính / Trưởng Tuân thủ"
     },
     "challenge": {
      "title": {
       "en": "Customer and Supplier Security Audits",
       "vi": "Đánh giá an ninh từ khách hàng và đối tác"
      },
      "body": {
       "en": "Global customers increasingly audit the security of their suppliers, and Vietnamese law sets duties for personal data and cybersecurity. Failing an audit can put orders at risk, and gaps are costly to fix under time pressure.",
       "vi": "Khách hàng toàn cầu ngày càng đánh giá an ninh của nhà cung cấp, đồng thời pháp luật Việt Nam quy định nghĩa vụ về dữ liệu cá nhân và an ninh mạng. Không đạt đánh giá có thể ảnh hưởng đơn hàng, và khắc phục gấp rất tốn kém."
      }
     },
     "solutions": [
      "dlp",
      "email-security",
      "database-security"
     ],
     "response": {
      "title": {
       "en": "Controls and evidence ready when the auditor arrives",
       "vi": "Kiểm soát và bằng chứng sẵn sàng khi đoàn đánh giá đến"
      },
      "body": {
       "en": "Data monitoring, database access control and in-country hosting give you documented controls and logs to show customers and prepare for Decree 13 and ISO 27001-style requirements.",
       "vi": "Giám sát dữ liệu, kiểm soát truy cập CSDL và lưu trữ trong nước giúp bạn có các biện pháp kiểm soát và nhật ký được ghi nhận để trình khách hàng, chuẩn bị cho Nghị định 13 và các yêu cầu theo ISO 27001."
      },
      "points": [
       {
        "en": "Logs and evidence on demand",
        "vi": "Nhật ký và bằng chứng khi cần"
       },
       {
        "en": "Data stays in Vietnam on VCLOUD",
        "vi": "Dữ liệu ở lại Việt Nam trên VCLOUD"
       },
       {
        "en": "One integrated package, one partner",
        "vi": "Một gói tích hợp, một đối tác"
       }
      ]
     }
    }
   ],
   "outcomes": [
    {
     "title": {
      "en": "Keep Production Running",
      "vi": "Giữ sản xuất vận hành liên tục"
     },
     "body": {
      "en": "Block the most common entry points for ransomware and control access to core systems to reduce the risk of line stoppages.",
      "vi": "Chặn các cửa ngõ phổ biến của ransomware và kiểm soát truy cập vào hệ thống lõi để giảm nguy cơ dừng dây chuyền."
     }
    },
    {
     "title": {
      "en": "Protect Intellectual Property",
      "vi": "Bảo vệ tài sản trí tuệ"
     },
     "body": {
      "en": "Keep designs, formulas and cost data from leaving through users, vendors or databases.",
      "vi": "Ngăn bản thiết kế, công thức và dữ liệu giá thành rời đi qua người dùng, nhà cung cấp hoặc cơ sở dữ liệu."
     }
    },
    {
     "title": {
      "en": "Win and Keep Customers",
      "vi": "Giành và giữ khách hàng"
     },
     "body": {
      "en": "Show documented controls and evidence in customer audits and prepare for data protection requirements in Vietnam.",
      "vi": "Chứng minh các biện pháp kiểm soát và bằng chứng trong đánh giá của khách hàng, đồng thời chuẩn bị cho yêu cầu bảo vệ dữ liệu tại Việt Nam."
     }
    }
   ],
   "faq": [
    {
     "q": {
      "en": "Do we need to replace our existing ERP or MES?",
      "vi": "Chúng tôi có phải thay ERP hoặc MES hiện có không?"
     },
     "a": {
      "en": "No. Database security and data monitoring sit around your existing systems. Scope and integration are assessed with the V-Tech Hub team for each plant.",
      "vi": "Không. Bảo mật cơ sở dữ liệu và giám sát dữ liệu được đặt quanh hệ thống hiện có. Phạm vi và cách tích hợp được đánh giá cùng đội ngũ V-Tech Hub cho từng nhà máy."
     }
    },
    {
     "q": {
      "en": "Can this help with customer security questionnaires and audits?",
      "vi": "Giải pháp có hỗ trợ bảng câu hỏi và đợt đánh giá an ninh của khách hàng không?"
     },
     "a": {
      "en": "It provides access controls, monitoring and logs that you can document as evidence. Certification outcomes depend on your overall program.",
      "vi": "Giải pháp cung cấp kiểm soát truy cập, giám sát và nhật ký để bạn làm bằng chứng. Kết quả chứng nhận còn phụ thuộc vào chương trình an ninh tổng thể của doanh nghiệp."
     }
    },
    {
     "q": {
      "en": "How do we handle remote access by machine and software vendors?",
      "vi": "Làm sao quản lý truy cập từ xa của hãng máy và nhà cung cấp phần mềm?"
     },
     "a": {
      "en": "Database access is routed through a controlled gateway with approval for sensitive queries and a full audit trail, so vendors get only what they need.",
      "vi": "Truy cập CSDL được đi qua cổng kiểm soát với phê duyệt cho truy vấn nhạy cảm và nhật ký kiểm toán đầy đủ, nhà cung cấp chỉ nhận đúng quyền cần thiết."
     }
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
   "title": {
    "en": "Logistics: Freight Forwarding, Warehousing, Last Mile & Ports",
    "vi": "Logistics: Giao nhận, Kho vận, Chặng cuối & Cảng"
   },
   "tagline": {
    "en": "VCLOUD & Email Security, Database Security, Data Loss Prevention and AI Legal & Compliance for supply chains that cannot stop moving.",
    "vi": "VCLOUD & Email Security, Bảo mật cơ sở dữ liệu, Chống thất thoát dữ liệu và AI Legal & Compliance cho chuỗi cung ứng không được phép dừng."
   },
   "bundle": [
    "email-security",
    "database-security",
    "dlp",
    "ai-legal"
   ],
   "image": null,
   "regs": [
    {
     "en": "Decree 13",
     "vi": "Nghị định 13"
    },
    {
     "en": "Cybersecurity Law",
     "vi": "Luật An ninh mạng"
    },
    {
     "en": "Data Law",
     "vi": "Luật Dữ liệu"
    },
    {
     "en": "Customs Law",
     "vi": "Luật Hải quan"
    }
   ],
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
   "chapters": [
    {
     "id": "bec",
     "persona": {
      "en": "CFO / Head of Finance",
      "vi": "Giám đốc Tài chính (CFO) / Kế toán trưởng"
     },
     "challenge": {
      "title": {
       "en": "Fake Shipping and Invoice Emails Divert Payments",
       "vi": "Email giả mạo hãng tàu, hóa đơn chuyển hướng thanh toán"
      },
      "body": {
       "en": "Forwarders handle a constant flow of freight invoices, booking confirmations and bank-detail updates. An email that imitates a carrier, agent or supplier and asks to pay a new account is easy to miss in a busy week, and a transfer is hard to recall once sent.",
       "vi": "Doanh nghiệp giao nhận xử lý liên tục hóa đơn cước, xác nhận booking và thông báo đổi tài khoản ngân hàng. Một email giả danh hãng tàu, đại lý hay nhà cung cấp yêu cầu chuyển tiền sang tài khoản mới rất dễ lọt qua trong những tuần cao điểm, và khi tiền đã chuyển đi thì rất khó thu hồi."
      }
     },
     "solutions": [
      "email-security"
     ],
     "response": {
      "title": {
       "en": "Stop the fake request before finance sees it",
       "vi": "Chặn yêu cầu giả trước khi đến tay kế toán"
      },
      "body": {
       "en": "Advanced email defense on VCLOUD filters phishing, executive and partner spoofing and ransomware before they reach employees, with data hosted inside Vietnam.",
       "vi": "Bảo vệ email nâng cao trên VCLOUD lọc phishing, giả mạo lãnh đạo và đối tác cùng ransomware trước khi tới nhân viên, dữ liệu được lưu trữ tại Việt Nam."
      },
      "points": [
       {
        "en": "Blocks spoofed invoices and payment-change requests",
        "vi": "Chặn hóa đơn và yêu cầu đổi tài khoản giả mạo"
       },
       {
        "en": "Stops ransomware at the mail gateway",
        "vi": "Ngăn ransomware ngay tại cổng email"
       },
       {
        "en": "Pair with a call-back rule for any bank-detail change",
        "vi": "Kết hợp quy tắc gọi xác minh với mọi thay đổi tài khoản"
       }
      ]
     }
    },
    {
     "id": "uptime",
     "persona": {
      "en": "CIO / Head of IT Operations",
      "vi": "Giám đốc Công nghệ thông tin (CIO) / Trưởng vận hành IT"
     },
     "challenge": {
      "title": {
       "en": "Tracking, WMS and TMS Cannot Afford to Go Dark",
       "vi": "Tracking, WMS và TMS không thể ngừng hoạt động"
      },
      "body": {
       "en": "When the tracking portal, warehouse system or transport management system is down, trucks queue, pickers idle and customers call for status. Ransomware or an unmanaged server across several depots and sites turns an IT problem into a delivery problem.",
       "vi": "Khi cổng tracking, hệ thống kho hay hệ thống quản lý vận tải ngừng, xe phải xếp hàng chờ, nhân viên kho đứng chờ và khách hàng gọi hỏi tình trạng. Ransomware hoặc một máy chủ thiếu quản lý ở nhiều kho, nhiều điểm khiến sự cố IT trở thành sự cố giao hàng."
      }
     },
     "solutions": [
      "email-security"
     ],
     "response": {
      "title": {
       "en": "Run core systems on sovereign cloud, keep the front door clean",
       "vi": "Vận hành hệ thống lõi trên đám mây chủ quyền, giữ cửa vào sạch"
      },
      "body": {
       "en": "VCLOUD hosts business-critical applications inside Vietnam, while email defense closes the most common route for ransomware into your sites. Sizing and service levels are agreed with your V-Tech Hub team.",
       "vi": "VCLOUD lưu trữ các ứng dụng trọng yếu ngay tại Việt Nam, còn bảo vệ email chặn đường xâm nhập phổ biến nhất của ransomware vào các điểm của bạn. Quy mô và mức dịch vụ được thống nhất cùng đội ngũ V-Tech Hub."
      },
      "points": [
       {
        "en": "Sovereign cloud hosting in Vietnam",
        "vi": "Đám mây chủ quyền đặt tại Việt Nam"
       },
       {
        "en": "Ransomware blocked at the mail gateway",
        "vi": "Ransomware bị chặn tại cổng email"
       },
       {
        "en": "One provider for hosting and email security",
        "vi": "Một đầu mối cho hạ tầng và bảo mật email"
       }
      ]
     }
    },
    {
     "id": "core-data",
     "persona": {
      "en": "Head of Warehouse / Transport Systems",
      "vi": "Trưởng bộ phận Hệ thống Kho vận"
     },
     "challenge": {
      "title": {
       "en": "Too Many Hands on WMS and TMS Databases",
       "vi": "Quá nhiều người có quyền trên CSDL WMS và TMS"
      },
      "body": {
       "en": "Administrators, developers, integration partners and customer-system vendors all touch order, inventory and rate data. Without query-level control, a privileged account can read tariffs, change a consignee or alter stock records without anyone noticing in time.",
       "vi": "Quản trị viên, lập trình viên, đối tác tích hợp và nhà cung cấp hệ thống của khách hàng đều chạm vào dữ liệu đơn hàng, tồn kho và bảng giá. Thiếu kiểm soát mức truy vấn, một tài khoản đặc quyền có thể xem bảng giá, đổi người nhận hoặc sửa tồn kho mà không ai kịp phát hiện."
      }
     },
     "solutions": [
      "database-security"
     ],
     "response": {
      "title": {
       "en": "Every query controlled, sensitive fields masked",
       "vi": "Mọi truy vấn được kiểm soát, trường nhạy cảm được che"
      },
      "body": {
       "en": "Query-level access control and real-time masking restrict who can see or change operational data, without slowing live order and dispatch transactions.",
       "vi": "Kiểm soát truy cập mức truy vấn và che giấu dữ liệu thời gian thực hạn chế ai được xem hoặc sửa dữ liệu vận hành, mà không làm chậm giao dịch đơn hàng và điều phối trực tiếp."
      },
      "points": [
       {
        "en": "Proxy gateway limits direct database access",
        "vi": "Cổng proxy hạn chế truy cập trực tiếp CSDL"
       },
       {
        "en": "Tariffs and customer details masked for unauthorized admins",
        "vi": "Bảng giá, thông tin khách che với quản trị viên không có quyền"
       },
       {
        "en": "Audit trail of every change",
        "vi": "Nhật ký kiểm toán mọi thay đổi"
       }
      ]
     }
    },
    {
     "id": "partner-data",
     "persona": {
      "en": "Chief Compliance / Data Protection Officer",
      "vi": "Giám đốc Tuân thủ / Phụ trách bảo vệ dữ liệu"
     },
     "challenge": {
      "title": {
       "en": "Partner, Driver and Customer Data Leaking Out",
       "vi": "Dữ liệu đối tác, tài xế và khách hàng bị thất thoát"
      },
      "body": {
       "en": "Consignee addresses and phone numbers, driver records, customer lists and rate cards circulate through chat apps, personal webmail, USB drives and partner apps. A departing sales or operations employee can take a customer base with them, and a leak raises Decree 13 questions.",
       "vi": "Địa chỉ, số điện thoại người nhận, hồ sơ tài xế, danh sách khách hàng và bảng giá lưu chuyển qua ứng dụng chat, webmail cá nhân, USB và ứng dụng của đối tác. Nhân viên kinh doanh hay vận hành nghỉ việc có thể mang theo cả tệp khách hàng, và một vụ lộ dữ liệu kéo theo vấn đề tuân thủ Nghị định 13."
      }
     },
     "solutions": [
      "dlp"
     ],
     "response": {
      "title": {
       "en": "See sensitive data wherever it tries to leave",
       "vi": "Thấy dữ liệu nhạy cảm ở mọi nơi nó cố rời đi"
      },
      "body": {
       "en": "360-degree monitoring across chat apps, personal webmail and USB drives detects customer and personal records automatically, helping stop insider leaks and supporting Decree 13 compliance.",
       "vi": "Giám sát 360° trên ứng dụng chat, webmail cá nhân và USB tự động nhận diện hồ sơ khách hàng và dữ liệu cá nhân, giúp ngăn rò rỉ nội bộ và hỗ trợ tuân thủ Nghị định 13."
      },
      "points": [
       {
        "en": "Covers chat, webmail and USB",
        "vi": "Bao phủ chat, webmail và USB"
       },
       {
        "en": "Auto-detects customer and personal data",
        "vi": "Tự nhận diện dữ liệu khách hàng và cá nhân"
       },
       {
        "en": "Evidence ready for audits and disputes",
        "vi": "Bằng chứng sẵn sàng cho kiểm toán và tranh chấp"
       }
      ]
     }
    },
    {
     "id": "contracts",
     "persona": {
      "en": "Head of Legal / Customs & Documentation",
      "vi": "Trưởng bộ phận Pháp chế / Chứng từ & Hải quan"
     },
     "challenge": {
      "title": {
       "en": "Contracts and Customs Documents Reviewed by Hand",
       "vi": "Hợp đồng và chứng từ hải quan rà soát thủ công"
      },
      "body": {
       "en": "Freight contracts, carrier and warehouse agreements, bills of lading and customs declarations all need careful checking for liability clauses, terms and inconsistencies. Manual review slows quoting and clearance, and errors can mean penalties or disputes.",
       "vi": "Hợp đồng vận chuyển, hợp đồng với hãng tàu và kho, vận đơn và tờ khai hải quan đều cần kiểm tra kỹ điều khoản trách nhiệm, điều kiện và điểm không nhất quán. Rà soát thủ công làm chậm báo giá và thông quan, còn sai sót có thể dẫn tới phạt hoặc tranh chấp."
      }
     },
     "solutions": [
      "ai-legal"
     ],
     "response": {
      "title": {
       "en": "Faster first-pass review, with people in control",
       "vi": "Rà soát vòng đầu nhanh hơn, con người vẫn quyết định"
      },
      "body": {
       "en": "A specialized AI assistant reviews contracts and regulatory documents to flag clauses and gaps for your legal team, with an on-premise option so commercial documents stay in your environment. Scope for logistics and customs content is confirmed with V-Tech Hub during assessment.",
       "vi": "Trợ lý AI chuyên biệt rà soát hợp đồng và văn bản quy định, đánh dấu điều khoản và điểm thiếu cho đội pháp chế, có tùy chọn on-premise để tài liệu thương mại nằm trong môi trường của bạn. Phạm vi áp dụng cho nội dung logistics và hải quan được xác nhận cùng V-Tech Hub khi khảo sát."
      },
      "points": [
       {
        "en": "Automates routine contract review",
        "vi": "Tự động hóa rà soát hợp đồng thường nhật"
       },
       {
        "en": "On-premise option for total privacy",
        "vi": "Tùy chọn on-premise bảo mật tuyệt đối"
       },
       {
        "en": "Frees legal and documentation staff for exceptions",
        "vi": "Giải phóng pháp chế và chứng từ cho các trường hợp ngoại lệ"
       }
      ]
     }
    }
   ],
   "outcomes": [
    {
     "title": {
      "en": "Protect Cash and Cargo Flow",
      "vi": "Bảo vệ dòng tiền và dòng hàng"
     },
     "body": {
      "en": "Block fake invoices and ransomware at the email layer and keep core systems on sovereign cloud, so payments and shipments keep moving.",
      "vi": "Chặn hóa đơn giả và ransomware ở lớp email, giữ hệ thống lõi trên đám mây chủ quyền để thanh toán và vận chuyển không bị gián đoạn."
     }
    },
    {
     "title": {
      "en": "Protect Customer, Partner and Driver Data",
      "vi": "Bảo vệ dữ liệu khách hàng, đối tác và tài xế"
     },
     "body": {
      "en": "Control database access and monitor data leaving through chat, webmail and USB, reducing leak risk and helping prepare for Decree 13.",
      "vi": "Kiểm soát truy cập CSDL và giám sát dữ liệu rời đi qua chat, webmail, USB, giảm rủi ro rò rỉ và giúp chuẩn bị cho Nghị định 13."
     }
    },
    {
     "title": {
      "en": "Cut Manual Document Work",
      "vi": "Giảm công việc chứng từ thủ công"
     },
     "body": {
      "en": "Automate first-pass contract and document review so legal and operations teams spend time on exceptions, not routine checking.",
      "vi": "Tự động hóa rà soát hợp đồng và chứng từ vòng đầu để đội pháp chế và vận hành tập trung vào ngoại lệ thay vì kiểm tra lặp lại."
     }
    }
   ],
   "faq": [
    {
     "q": {
      "en": "How do we reduce the risk of paying a fake freight invoice?",
      "vi": "Làm sao giảm rủi ro thanh toán nhầm hóa đơn cước giả?"
     },
     "a": {
      "en": "Email defense on VCLOUD filters spoofed carrier, partner and executive emails before they reach staff. We also recommend a process control: verify any bank-detail change by calling a known number.",
      "vi": "Bảo vệ email trên VCLOUD lọc email giả danh hãng tàu, đối tác và lãnh đạo trước khi đến nhân viên. Chúng tôi cũng khuyến nghị thêm kiểm soát quy trình: mọi thay đổi tài khoản ngân hàng phải được xác minh qua số điện thoại đã biết."
     }
    },
    {
     "q": {
      "en": "Can we keep logistics data inside Vietnam?",
      "vi": "Chúng tôi có thể giữ dữ liệu logistics trong nước không?"
     },
     "a": {
      "en": "Yes. VCLOUD hosts applications and email inside Vietnam, which supports data localization expectations under Vietnamese law. Your legal team should confirm the exact obligations for your data types.",
      "vi": "Có. VCLOUD lưu trữ ứng dụng và email tại Việt Nam, đáp ứng kỳ vọng về lưu trữ dữ liệu trong nước theo pháp luật Việt Nam. Đội pháp chế nên xác nhận nghĩa vụ cụ thể cho từng loại dữ liệu của doanh nghiệp."
     }
    },
    {
     "q": {
      "en": "How is sensitive operational data protected from privileged admins and vendors?",
      "vi": "Dữ liệu vận hành nhạy cảm được bảo vệ khỏi quản trị viên và nhà cung cấp có đặc quyền như thế nào?"
     },
     "a": {
      "en": "Database Security applies query-level access control, approval for sensitive changes and real-time masking, while DLP monitors chat, webmail and USB for customer and personal data leaving the company.",
      "vi": "Bảo mật cơ sở dữ liệu áp dụng kiểm soát mức truy vấn, phê duyệt thay đổi nhạy cảm và che giấu thời gian thực, còn DLP giám sát chat, webmail, USB để phát hiện dữ liệu khách hàng và cá nhân bị đưa ra ngoài."
     }
    },
    {
     "q": {
      "en": "Does the AI Legal assistant handle customs documents?",
      "vi": "Trợ lý AI Legal có xử lý chứng từ hải quan không?"
     },
     "a": {
      "en": "It is built for contract and regulatory document review. Coverage of customs and freight document types is scoped with V-Tech Hub in a pilot, and an on-premise option keeps documents private.",
      "vi": "Giải pháp được xây dựng cho rà soát hợp đồng và văn bản quy định. Phạm vi với các loại chứng từ hải quan và vận tải được xác định cùng V-Tech Hub trong giai đoạn thử nghiệm, và tùy chọn on-premise giữ tài liệu riêng tư."
     }
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
   "title": {
    "en": "Media & Digital Content: News, Streaming, Publishing and Gaming",
    "vi": "Truyền thông & Nội dung số: Báo điện tử, Streaming, Xuất bản và Game"
   },
   "tagline": {
    "en": "CDN and Anti-DDoS/WAF for live events, Email Security on VCLOUD, Data Loss Prevention for content and subscriber data, and AI Legal for contract review.",
    "vi": "CDN và Anti-DDoS/WAF cho sự kiện trực tiếp, Email Security trên VCLOUD, Chống thất thoát dữ liệu cho nội dung và dữ liệu thuê bao, cùng AI Legal rà soát hợp đồng."
   },
   "bundle": [
    "cdn",
    "anti-ddos-waf",
    "email-security",
    "dlp",
    "ai-legal"
   ],
   "image": null,
   "regs": [
    {
     "en": "Decree 13",
     "vi": "Nghị định 13"
    },
    {
     "en": "Law on Cybersecurity",
     "vi": "Luật An ninh mạng"
    },
    {
     "en": "Intellectual Property Law",
     "vi": "Luật Sở hữu trí tuệ"
    }
   ],
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
   "chapters": [
    {
     "id": "live-ddos",
     "persona": {
      "en": "CTO / Head of Platform",
      "vi": "Giám đốc Công nghệ / Trưởng bộ phận Nền tảng"
     },
     "challenge": {
      "title": {
       "en": "Traffic Spikes and DDoS During Live Events",
       "vi": "Lưu lượng tăng vọt và tấn công DDoS trong sự kiện trực tiếp"
      },
      "body": {
       "en": "A live broadcast or breaking-news peak is exactly when the site must not fail. Genuine surges and malicious floods look alike, and downtime during the event means lost viewers, advertisers and brand trust.",
       "vi": "Phát sóng trực tiếp hay đỉnh tin nóng chính là lúc hệ thống không được phép gián đoạn. Lượng truy cập thật tăng đột biến và lưu lượng tấn công trông rất giống nhau; website sập đúng lúc sự kiện đồng nghĩa mất người xem, nhà quảng cáo và uy tín thương hiệu."
      }
     },
     "solutions": [
      "anti-ddos-waf"
     ],
     "response": {
      "title": {
       "en": "Absorb the flood, keep the show on air",
       "vi": "Hấp thụ đòn tấn công, giữ chương trình lên sóng"
      },
      "body": {
       "en": "Anti-DDoS filtering separates real viewers from attack traffic before it reaches your origin, so the platform stays available through the peak.",
       "vi": "Lớp chống DDoS lọc tách người xem thật khỏi lưu lượng tấn công trước khi chạm tới máy chủ gốc, giúp nền tảng luôn sẵn sàng suốt giờ cao điểm."
      },
      "points": [
       {
        "en": "Filters attack traffic away from the origin",
        "vi": "Lọc lưu lượng tấn công trước khi tới máy chủ gốc"
       },
       {
        "en": "Keeps legitimate viewers connected",
        "vi": "Giữ kết nối cho người xem hợp lệ"
       },
       {
        "en": "Plan capacity ahead of major events",
        "vi": "Chuẩn bị năng lực trước các sự kiện lớn"
       }
      ]
     }
    },
    {
     "id": "latency",
     "persona": {
      "en": "Head of Streaming / Digital Product",
      "vi": "Trưởng bộ phận Streaming / Sản phẩm số"
     },
     "challenge": {
      "title": {
       "en": "Slow Delivery and Buffering for Viewers",
       "vi": "Tải chậm và giật lag với người xem"
      },
      "body": {
       "en": "Viewers leave quickly when video buffers or pages load slowly, especially on mobile and across provinces. Serving everything from a single origin raises cost and degrades experience as the audience grows.",
       "vi": "Người xem rời đi rất nhanh khi video giật hoặc trang tải chậm, nhất là trên di động và ở các tỉnh thành. Phục vụ mọi thứ từ một máy chủ gốc vừa đẩy chi phí lên vừa làm trải nghiệm xấu đi khi lượng người xem tăng."
      }
     },
     "solutions": [
      "cdn"
     ],
     "response": {
      "title": {
       "en": "Bring content closer to the audience",
       "vi": "Đưa nội dung đến gần khán giả hơn"
      },
      "body": {
       "en": "A CDN caches and delivers video, images and pages from edge locations, reducing load on your origin and improving speed for users in Vietnam.",
       "vi": "CDN lưu đệm và phân phối video, hình ảnh, trang web từ các điểm biên, giảm tải cho máy chủ gốc và cải thiện tốc độ cho người dùng tại Việt Nam."
      },
      "points": [
       {
        "en": "Caches video, images and web assets at the edge",
        "vi": "Lưu đệm video, hình ảnh và tài nguyên web tại điểm biên"
       },
       {
        "en": "Lightens the load on origin servers",
        "vi": "Giảm tải cho máy chủ gốc"
       },
       {
        "en": "Works together with Anti-DDoS protection",
        "vi": "Kết hợp cùng lớp chống DDoS"
       }
      ]
     }
    },
    {
     "id": "takeover",
     "persona": {
      "en": "Editor-in-Chief / Head of IT Security",
      "vi": "Tổng biên tập / Trưởng bộ phận An ninh thông tin"
     },
     "challenge": {
      "title": {
       "en": "Site Defacement and Account Takeover",
       "vi": "Deface website và chiếm quyền tài khoản"
      },
      "body": {
       "en": "A defaced homepage or a hijacked editorial or social account can publish false content under your brand within minutes. Attackers often get in through a phishing email to a journalist or admin, or through a web application flaw.",
       "vi": "Trang chủ bị deface hay tài khoản biên tập, mạng xã hội bị chiếm quyền có thể đăng tin sai lệch dưới tên thương hiệu của bạn chỉ trong vài phút. Tin tặc thường vào qua email phishing gửi phóng viên, quản trị viên, hoặc qua lỗ hổng ứng dụng web."
      }
     },
     "solutions": [
      "anti-ddos-waf",
      "email-security"
     ],
     "response": {
      "title": {
       "en": "Protect the front door and the inbox",
       "vi": "Bảo vệ cả cổng web và hộp thư"
      },
      "body": {
       "en": "A web application firewall blocks common attacks on the CMS and portal, while email defense on VCLOUD stops the phishing that steals editorial credentials.",
       "vi": "Tường lửa ứng dụng web chặn các đòn tấn công phổ biến vào CMS và cổng thông tin, còn bảo vệ email trên VCLOUD chặn phishing đánh cắp thông tin đăng nhập của bộ phận biên tập."
      },
      "points": [
       {
        "en": "WAF shields the CMS and portal from web attacks",
        "vi": "WAF che chắn CMS và cổng thông tin khỏi tấn công web"
       },
       {
        "en": "Blocks phishing aimed at newsroom accounts",
        "vi": "Chặn phishing nhắm vào tài khoản tòa soạn"
       },
       {
        "en": "Hosting inside Vietnam on VCLOUD",
        "vi": "Lưu trữ tại Việt Nam trên VCLOUD"
       }
      ]
     }
    },
    {
     "id": "leaks",
     "persona": {
      "en": "Chief Content Officer / Head of Production",
      "vi": "Giám đốc Nội dung / Trưởng bộ phận Sản xuất"
     },
     "challenge": {
      "title": {
       "en": "Pre-release Leaks and Content Piracy",
       "vi": "Rò rỉ nội dung trước ngày phát hành và vi phạm bản quyền"
      },
      "body": {
       "en": "Unreleased episodes, scripts, game builds or exclusive stories move between production partners, freelancers and staff. One copy sent to personal webmail, chat or a USB drive can destroy the value of a premiere.",
       "vi": "Tập phim chưa phát hành, kịch bản, bản build game hay tin độc quyền luân chuyển giữa đối tác sản xuất, cộng tác viên và nhân viên. Chỉ một bản sao gửi qua webmail cá nhân, ứng dụng chat hay USB cũng đủ làm mất giá trị của buổi ra mắt."
      }
     },
     "solutions": [
      "dlp"
     ],
     "response": {
      "title": {
       "en": "Know where pre-release content goes",
       "vi": "Biết nội dung chưa phát hành đi về đâu"
      },
      "body": {
       "en": "Data loss prevention monitors chat apps, personal webmail and USB drives, detects sensitive files and leaves an audit trail to stop insider leaks.",
       "vi": "Giải pháp chống thất thoát dữ liệu giám sát ứng dụng chat, webmail cá nhân và USB, nhận diện tệp nhạy cảm và lưu vết kiểm toán để ngăn rò rỉ từ bên trong."
      },
      "points": [
       {
        "en": "Covers chat, webmail and USB channels",
        "vi": "Bao phủ chat, webmail và USB"
       },
       {
        "en": "Detects sensitive files automatically",
        "vi": "Tự động nhận diện tệp nhạy cảm"
       },
       {
        "en": "Evidence trail for investigations",
        "vi": "Dấu vết bằng chứng phục vụ điều tra"
       }
      ]
     }
    },
    {
     "id": "data-legal",
     "persona": {
      "en": "CFO / Head of Legal & Data Protection",
      "vi": "Giám đốc Tài chính / Trưởng bộ phận Pháp chế & Bảo vệ dữ liệu"
     },
     "challenge": {
      "title": {
       "en": "Subscriber Data and Copyright Contract Load",
       "vi": "Dữ liệu thuê bao và khối lượng hợp đồng bản quyền"
      },
      "body": {
       "en": "Subscriptions, payments and viewing habits make subscriber data subject to Decree 13, while licensing, talent and distribution contracts pile up for legal to review. Slow reviews delay deals, and a data incident hurts trust and finances.",
       "vi": "Đăng ký, thanh toán và thói quen xem khiến dữ liệu thuê bao thuộc phạm vi Nghị định 13, trong khi hợp đồng bản quyền, nghệ sĩ và phát hành dồn về pháp chế. Rà soát chậm làm trễ thương vụ, còn sự cố dữ liệu ảnh hưởng đến niềm tin và tài chính."
      }
     },
     "solutions": [
      "ai-legal",
      "dlp",
      "email-security"
     ],
     "response": {
      "title": {
       "en": "Faster contract review, safer subscriber data",
       "vi": "Rà soát hợp đồng nhanh hơn, dữ liệu thuê bao an toàn hơn"
      },
      "body": {
       "en": "An AI assistant supports first-pass contract review with an on-premise option, while DLP and sovereign VCLOUD hosting help keep subscriber data under control inside Vietnam.",
       "vi": "Trợ lý AI hỗ trợ rà soát hợp đồng bước đầu, có tùy chọn on-premise; DLP và lưu trữ chủ quyền trên VCLOUD giúp kiểm soát dữ liệu thuê bao ngay tại Việt Nam."
      },
      "points": [
       {
        "en": "AI-assisted first-pass contract review",
        "vi": "AI hỗ trợ rà soát hợp đồng bước đầu"
       },
       {
        "en": "On-premise option keeps documents private",
        "vi": "Tùy chọn on-premise giữ tài liệu riêng tư"
       },
       {
        "en": "Detects subscriber records leaving the company",
        "vi": "Phát hiện hồ sơ thuê bao rời khỏi doanh nghiệp"
       }
      ]
     }
    }
   ],
   "outcomes": [
    {
     "title": {
      "en": "Stay Online When It Counts",
      "vi": "Luôn trực tuyến vào lúc quan trọng"
     },
     "body": {
      "en": "Combine CDN and Anti-DDoS/WAF so live events, premieres and breaking news run smoothly and your site resists attack.",
      "vi": "Kết hợp CDN và Anti-DDoS/WAF để sự kiện trực tiếp, ngày ra mắt và tin nóng vận hành mượt mà, website đủ sức chống tấn công."
     }
    },
    {
     "title": {
      "en": "Protect Content and Brand Trust",
      "vi": "Bảo vệ nội dung và uy tín thương hiệu"
     },
     "body": {
      "en": "Reduce the risk of leaks, hijacked accounts and defaced pages that damage your editorial credibility and content value.",
      "vi": "Giảm rủi ro rò rỉ, chiếm tài khoản và deface làm tổn hại uy tín biên tập cũng như giá trị nội dung."
     }
    },
    {
     "title": {
      "en": "Compliance and Efficiency",
      "vi": "Tuân thủ và hiệu quả vận hành"
     },
     "body": {
      "en": "Keep subscriber data in Vietnam on VCLOUD, support Decree 13 readiness and free legal teams from routine contract review.",
      "vi": "Lưu trữ dữ liệu thuê bao tại Việt Nam trên VCLOUD, hỗ trợ chuẩn bị tuân thủ Nghị định 13 và giải phóng pháp chế khỏi rà soát hợp đồng thường nhật."
     }
    }
   ],
   "faq": [
    {
     "q": {
      "en": "Why combine CDN and Anti-DDoS rather than buy them separately?",
      "vi": "Vì sao nên kết hợp CDN và Anti-DDoS thay vì mua riêng?"
     },
     "a": {
      "en": "A CDN speeds up delivery and absorbs legitimate load, while Anti-DDoS filters malicious traffic. Together, with one partner, they keep the platform fast and available during peaks.",
      "vi": "CDN tăng tốc phân phối và gánh tải hợp lệ, còn Anti-DDoS lọc lưu lượng độc hại. Khi kết hợp cùng một đối tác, nền tảng vừa nhanh vừa sẵn sàng trong giờ cao điểm."
     }
    },
    {
     "q": {
      "en": "How can we reduce the risk of pre-release content leaking?",
      "vi": "Làm sao giảm rủi ro rò rỉ nội dung trước ngày phát hành?"
     },
     "a": {
      "en": "Use DLP to monitor chat, personal webmail and USB channels, detect sensitive files and keep an audit trail, alongside access policies for production partners.",
      "vi": "Dùng DLP giám sát kênh chat, webmail cá nhân và USB, nhận diện tệp nhạy cảm và lưu vết kiểm toán, kết hợp chính sách truy cập cho đối tác sản xuất."
     }
    },
    {
     "q": {
      "en": "Is subscriber data covered by Vietnamese data protection rules?",
      "vi": "Dữ liệu thuê bao có thuộc quy định bảo vệ dữ liệu của Việt Nam không?"
     },
     "a": {
      "en": "Yes. Decree 13 on personal data protection applies to subscriber information. Hosting in Vietnam and controlling data movement help you prepare; confirm obligations with your legal counsel.",
      "vi": "Có. Nghị định 13 về bảo vệ dữ liệu cá nhân áp dụng cho thông tin thuê bao. Lưu trữ tại Việt Nam và kiểm soát luồng dữ liệu giúp bạn chuẩn bị; nên xác nhận nghĩa vụ cụ thể với cố vấn pháp lý."
     }
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
   "title": {
    "en": "Education: Universities, K-12 Groups and E-learning",
    "vi": "Giáo dục: Đại học, Hệ thống phổ thông và Đào tạo trực tuyến"
   },
   "tagline": {
    "en": "Sovereign VCLOUD hosting, email defense, Data Loss Prevention and Database Security for campuses that cannot afford downtime or a student-data leak.",
    "vi": "Hạ tầng VCLOUD chủ quyền, bảo mật email, chống thất thoát dữ liệu và bảo mật cơ sở dữ liệu cho các cơ sở đào tạo không thể gián đoạn hay lộ dữ liệu người học."
   },
   "bundle": [
    "email-security",
    "dlp",
    "database-security"
   ],
   "image": null,
   "regs": [
    {
     "en": "Decree 13",
     "vi": "Nghị định 13"
    },
    {
     "en": "Law on Cybersecurity",
     "vi": "Luật An ninh mạng"
    },
    {
     "en": "MOET",
     "vi": "Bộ GD&ĐT"
    }
   ],
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
   "chapters": [
    {
     "id": "peak-availability",
     "persona": {
      "en": "CIO / Head of IT",
      "vi": "Giám đốc CNTT"
     },
     "challenge": {
      "title": {
       "en": "Enrollment and Exam Peaks Hit the LMS Hardest",
       "vi": "Cao điểm tuyển sinh và thi cử đè nặng lên LMS"
      },
      "body": {
       "en": "Application deadlines, course registration and online exams send traffic from a quiet baseline to a spike within hours. An on-premise server room sized for the average day slows down or fails exactly when thousands of students and parents are watching.",
       "vi": "Hạn nộp hồ sơ, đăng ký học phần và thi trực tuyến khiến lưu lượng tăng vọt trong vài giờ so với ngày thường. Phòng máy chủ tại chỗ được thiết kế cho ngày bình thường sẽ chậm hoặc sập đúng lúc hàng nghìn sinh viên và phụ huynh đang theo dõi."
      }
     },
     "solutions": [
      "email-security"
     ],
     "response": {
      "title": {
       "en": "Run critical academic systems on VCLOUD",
       "vi": "Đưa hệ thống học vụ trọng yếu lên VCLOUD"
      },
      "body": {
       "en": "Hosting the admissions portal, LMS and registration systems on VCLOUD, a secure cloud inside Vietnam, replaces a fixed server room with infrastructure you can plan around peak periods, while data stays in the country.",
       "vi": "Đặt cổng tuyển sinh, LMS và hệ thống đăng ký học phần trên VCLOUD, đám mây bảo mật đặt tại Việt Nam, thay cho phòng máy cố định bằng hạ tầng có thể hoạch định theo mùa cao điểm, trong khi dữ liệu vẫn ở trong nước."
      },
      "points": [
       {
        "en": "Hosting inside Vietnam for academic and student systems",
        "vi": "Lưu trữ tại Việt Nam cho hệ thống học vụ và dữ liệu người học"
       },
       {
        "en": "Capacity planned around enrollment and exam calendars",
        "vi": "Năng lực hạ tầng hoạch định theo lịch tuyển sinh, thi cử"
       },
       {
        "en": "Less on-premise hardware to buy and maintain",
        "vi": "Giảm phần cứng tại chỗ phải mua sắm và bảo trì"
       }
      ]
     }
    },
    {
     "id": "phishing",
     "persona": {
      "en": "Head of Information Security",
      "vi": "Giám đốc An ninh thông tin"
     },
     "challenge": {
      "title": {
       "en": "Phishing Aimed at Staff and Students",
       "vi": "Phishing nhắm vào cán bộ, giảng viên và sinh viên"
      },
      "body": {
       "en": "Campus email is open, widely known and used by tens of thousands of people with uneven security awareness. Fake scholarship notices, tuition payment requests and spoofed messages from the president or finance office are an easy way to steal accounts and reach internal systems.",
       "vi": "Email của trường là kênh mở, nhiều người biết và có hàng chục nghìn người dùng với mức nhận thức an toàn không đồng đều. Thông báo học bổng giả, yêu cầu đóng học phí giả hay thư mạo danh hiệu trưởng, phòng tài chính là cách dễ dàng để chiếm tài khoản và đi sâu vào hệ thống nội bộ."
      }
     },
     "solutions": [
      "email-security"
     ],
     "response": {
      "title": {
       "en": "Filter the threat before it reaches the inbox",
       "vi": "Lọc mối đe dọa trước khi tới hộp thư"
      },
      "body": {
       "en": "Advanced email defense stops phishing, executive spoofing and ransomware at the gateway, so protection does not depend on every student and lecturer spotting the trap.",
       "vi": "Bảo vệ email nâng cao chặn phishing, giả mạo lãnh đạo và ransomware ngay tại cổng, để an toàn không phụ thuộc vào việc mọi sinh viên, giảng viên đều tự nhận ra bẫy."
      },
      "points": [
       {
        "en": "Blocks phishing and impersonation of leadership",
        "vi": "Chặn phishing và giả mạo lãnh đạo nhà trường"
       },
       {
        "en": "Stops ransomware at the mail gateway",
        "vi": "Ngăn ransomware ngay tại cổng email"
       },
       {
        "en": "Hosted on sovereign cloud in Vietnam",
        "vi": "Triển khai trên đám mây chủ quyền tại Việt Nam"
       }
      ]
     }
    },
    {
     "id": "student-data",
     "persona": {
      "en": "Data Protection Officer / Registrar",
      "vi": "Cán bộ bảo vệ dữ liệu / Trưởng phòng Đào tạo"
     },
     "challenge": {
      "title": {
       "en": "Student and Minors' Data Under Decree 13",
       "vi": "Dữ liệu người học và trẻ em theo Nghị định 13"
      },
      "body": {
       "en": "Enrollment files, ID numbers, grades, health notes and family details sit in spreadsheets, chat groups and personal mailboxes across many departments. Decree 13 sets stricter handling for children's data, so one forwarded file can become a compliance incident.",
       "vi": "Hồ sơ nhập học, số định danh, điểm số, thông tin sức khỏe và hoàn cảnh gia đình nằm rải rác trong bảng tính, nhóm chat và hộp thư cá nhân ở nhiều phòng ban. Nghị định 13 đặt ra yêu cầu chặt chẽ hơn với dữ liệu của trẻ em, nên chỉ một tệp bị chuyển tiếp cũng có thể thành sự cố tuân thủ."
      }
     },
     "solutions": [
      "dlp"
     ],
     "response": {
      "title": {
       "en": "Know where student data goes, and stop it leaving",
       "vi": "Biết dữ liệu người học đi đâu và chặn khi bị đưa ra ngoài"
      },
      "body": {
       "en": "360-degree monitoring across chat apps, personal webmail and USB drives automatically detects sensitive records, helping stop leaks and supporting Decree 13 compliance.",
       "vi": "Giám sát 360° trên ứng dụng chat, webmail cá nhân và USB tự động nhận diện hồ sơ nhạy cảm, giúp ngăn rò rỉ và hỗ trợ tuân thủ Nghị định 13."
      },
      "points": [
       {
        "en": "Covers chat, webmail and USB channels",
        "vi": "Bao phủ kênh chat, webmail và USB"
       },
       {
        "en": "Auto-detects personal and student records",
        "vi": "Tự nhận diện hồ sơ cá nhân và hồ sơ người học"
       },
       {
        "en": "Evidence ready for audits and incident reviews",
        "vi": "Bằng chứng sẵn sàng cho kiểm toán và rà soát sự cố"
       }
      ]
     }
    },
    {
     "id": "records-research",
     "persona": {
      "en": "Vice President for Research / Head of Student Information Systems",
      "vi": "Phó hiệu trưởng phụ trách nghiên cứu / Trưởng bộ phận hệ thống thông tin sinh viên"
     },
     "challenge": {
      "title": {
       "en": "Grades, Records and Research IP in Too Many Hands",
       "vi": "Điểm số, hồ sơ và tài sản trí tuệ nghiên cứu qua quá nhiều tay"
      },
      "body": {
       "en": "Student information and research databases are touched by administrators, developers, outsourced vendors and visiting researchers. Without query-level control, altered grades or copied research data may go unnoticed until a complaint or a dispute surfaces.",
       "vi": "Cơ sở dữ liệu sinh viên và dữ liệu nghiên cứu được quản trị viên, lập trình viên, nhà thầu ngoài và nhà nghiên cứu khách truy cập. Thiếu kiểm soát ở mức truy vấn, điểm bị sửa hay dữ liệu nghiên cứu bị sao chép có thể không ai biết cho đến khi có khiếu nại hoặc tranh chấp."
      }
     },
     "solutions": [
      "database-security",
      "dlp"
     ],
     "response": {
      "title": {
       "en": "Control who touches the record, and mask what they see",
       "vi": "Kiểm soát ai chạm vào dữ liệu và che những gì họ nhìn thấy"
      },
      "body": {
       "en": "Query-level access control and real-time masking limit privileged and vendor access to student and research databases, while data loss prevention watches for copies leaving through everyday channels.",
       "vi": "Kiểm soát truy cập mức truy vấn và che giấu dữ liệu thời gian thực giới hạn quyền của quản trị viên và nhà thầu trên CSDL sinh viên, nghiên cứu; chống thất thoát dữ liệu theo dõi các bản sao bị đưa ra qua kênh thường ngày."
      },
      "points": [
       {
        "en": "Restricts and audits privileged and vendor access",
        "vi": "Hạn chế và kiểm toán quyền đặc quyền, quyền nhà thầu"
       },
       {
        "en": "Masks sensitive fields from unauthorized admins",
        "vi": "Che trường nhạy cảm với quản trị viên không có quyền"
       },
       {
        "en": "Flags research files copied out via chat, webmail or USB",
        "vi": "Cảnh báo tệp nghiên cứu bị sao chép qua chat, webmail, USB"
       }
      ]
     }
    },
    {
     "id": "budget-sovereignty",
     "persona": {
      "en": "CFO / Vice President of Finance",
      "vi": "Giám đốc Tài chính / Phó hiệu trưởng phụ trách tài chính"
     },
     "challenge": {
      "title": {
       "en": "Tight Budgets and the Question of Where Data Lives",
       "vi": "Ngân sách eo hẹp và câu hỏi dữ liệu đặt ở đâu"
      },
      "body": {
       "en": "Tuition-funded budgets leave little room for separate security tools or for rebuilding a data center. At the same time the board asks where student data is stored and who can reach it, and a patchwork of vendors makes that hard to answer.",
       "vi": "Ngân sách chủ yếu từ học phí khó có dư địa cho từng công cụ an ninh riêng lẻ hay xây lại trung tâm dữ liệu. Trong khi đó hội đồng trường hỏi dữ liệu người học lưu ở đâu, ai truy cập được, và một mớ nhà cung cấp rời rạc khiến câu trả lời khó thống nhất."
      }
     },
     "solutions": [
      "email-security",
      "dlp",
      "database-security"
     ],
     "response": {
      "title": {
       "en": "One integrated, sovereign stack instead of scattered tools",
       "vi": "Một bộ giải pháp tích hợp, chủ quyền thay vì công cụ rời rạc"
      },
      "body": {
       "en": "VCLOUD hosting in Vietnam combined with email, data and database protection from one alliance gives finance a single partner and cost line, and gives the board a clear answer on data location.",
       "vi": "Hạ tầng VCLOUD tại Việt Nam kết hợp bảo vệ email, dữ liệu và cơ sở dữ liệu từ cùng một liên minh giúp khối tài chính làm việc với một đầu mối, một khoản chi, và giúp hội đồng trường có câu trả lời rõ ràng về nơi lưu trữ dữ liệu."
      },
      "points": [
       {
        "en": "Operating-cost model instead of heavy upfront hardware",
        "vi": "Mô hình chi phí vận hành thay vì đầu tư phần cứng lớn ban đầu"
       },
       {
        "en": "Data kept inside Vietnam",
        "vi": "Dữ liệu được giữ tại Việt Nam"
       },
       {
        "en": "One accountable partner across the stack",
        "vi": "Một đối tác chịu trách nhiệm xuyên suốt"
       }
      ]
     }
    }
   ],
   "outcomes": [
    {
     "title": {
      "en": "Keep Learning Running",
      "vi": "Giữ việc dạy và học không gián đoạn"
     },
     "body": {
      "en": "Run admissions, LMS and exam systems on infrastructure planned for peak periods, so critical dates are not lost to downtime.",
      "vi": "Vận hành tuyển sinh, LMS và thi cử trên hạ tầng được hoạch định cho mùa cao điểm, để những mốc thời gian quan trọng không bị mất vì gián đoạn."
     }
    },
    {
     "title": {
      "en": "Protect Students and Meet Decree 13",
      "vi": "Bảo vệ người học và đáp ứng Nghị định 13"
     },
     "body": {
      "en": "Reduce the risk of phishing, leaks and unauthorized access to student and minors' data, with audit evidence when regulators or parents ask.",
      "vi": "Giảm rủi ro phishing, rò rỉ và truy cập trái phép vào dữ liệu người học, trẻ em, kèm bằng chứng kiểm toán khi cơ quan quản lý hoặc phụ huynh yêu cầu."
     }
    },
    {
     "title": {
      "en": "Spend Smarter, Keep Data Sovereign",
      "vi": "Chi tiêu hiệu quả, giữ chủ quyền dữ liệu"
     },
     "body": {
      "en": "Replace scattered tools and server rooms with one integrated stack hosted in Vietnam, easier to budget and to explain to the board.",
      "vi": "Thay các công cụ rời rạc và phòng máy chủ bằng một bộ giải pháp tích hợp đặt tại Việt Nam, dễ lập ngân sách và dễ giải trình với hội đồng trường."
     }
    }
   ],
   "faq": [
    {
     "q": {
      "en": "Why host the LMS and admissions portal on a Vietnam-based cloud?",
      "vi": "Vì sao nên đặt LMS và cổng tuyển sinh trên đám mây tại Việt Nam?"
     },
     "a": {
      "en": "VCLOUD keeps student data inside Vietnam and lets you plan capacity around enrollment and exam peaks instead of sizing a server room for them. Specific capacity and SLA terms are agreed per project with the V-Tech Hub team.",
      "vi": "VCLOUD giữ dữ liệu người học trong nước và cho phép hoạch định năng lực theo đợt tuyển sinh, thi cử thay vì thiết kế phòng máy cho đúng đỉnh tải. Năng lực và cam kết dịch vụ cụ thể được thống nhất theo từng dự án cùng đội ngũ V-Tech Hub."
     }
    },
    {
     "q": {
      "en": "How does the stack help with children's data under Decree 13?",
      "vi": "Bộ giải pháp hỗ trợ thế nào với dữ liệu trẻ em theo Nghị định 13?"
     },
     "a": {
      "en": "Data Loss Prevention detects sensitive student records across chat, webmail and USB, and Database Security controls and masks access to records at the source. Together they provide visibility and audit evidence; legal obligations such as consent remain the institution's responsibility.",
      "vi": "Giải pháp chống thất thoát dữ liệu nhận diện hồ sơ nhạy cảm trên chat, webmail, USB, còn bảo mật cơ sở dữ liệu kiểm soát và che giấu truy cập ngay tại nguồn. Cùng nhau chúng tạo khả năng quan sát và bằng chứng kiểm toán; các nghĩa vụ pháp lý như sự đồng ý của chủ thể dữ liệu vẫn thuộc trách nhiệm của nhà trường."
     }
    },
    {
     "q": {
      "en": "Can a school start small given limited budget?",
      "vi": "Trường có ngân sách hạn chế có thể bắt đầu nhỏ không?"
     },
     "a": {
      "en": "Yes. Many institutions begin with email defense and VCLOUD hosting for the most exposed systems, then add data and database protection in phases. Scope and pricing are assessed with the V-Tech Hub team.",
      "vi": "Có. Nhiều đơn vị bắt đầu từ bảo vệ email và VCLOUD cho các hệ thống dễ bị tấn công nhất, sau đó bổ sung bảo vệ dữ liệu và cơ sở dữ liệu theo từng giai đoạn. Phạm vi và chi phí được đánh giá cùng đội ngũ V-Tech Hub."
     }
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
  bot: Bot, target: Target, filter: Filter, 'file-search': FileSearch, megaphone: Megaphone, users: Users, gauge: Gauge,
  'trending-up': TrendingUp, star: Star
};
const Ic = ({ name, ...p }) => { const C = ICONS[name] || Boxes; return <C aria-hidden="true" {...p} />; };

/* [English, Vietnamese] pairs keep both languages in lockstep: a key cannot exist in only one. */
const UI = {
  'nav.solutions': ['Solutions', 'Giải pháp'],
  'nav.industry': ['Industry', 'Ngành'],
  'nav.meet': ['Meet V-Tech Foundry', 'Về V-Tech Foundry'],
  'nav.about': ['About Us', 'Về chúng tôi'],
  'nav.expert': ['Expert', 'Chuyên gia'],
  'nav.request': ['Request Consultation', 'Đăng ký tư vấn'],
  'nav.menu': ['Menu', 'Menu'],
  'nav.close': ['Close', 'Đóng'],
  'nav.primary': ['Primary', 'Điều hướng chính'],
  'nav.lang': ['Language', 'Ngôn ngữ'],
  'hero.eyebrow': ['A VNETWORK technology alliance', 'Liên minh công nghệ của VNETWORK'],
  'hero.title': ['Next-Gen Technology Alliance Delivering Mission-Critical Enterprise Solutions', 'Liên minh Công nghệ Tiên phong Kiến tạo Giải pháp Chuyên sâu cho Doanh nghiệp'],
  'hero.sub': ['V-TECH FOUNDRY leads a premier technology alliance, delivering packaged, vertical-tailored solutions to solve complex challenges and accelerate digital transformation for enterprises.', 'V-TECH FOUNDRY dẫn dắt liên minh công nghệ hàng đầu, cung cấp các gói giải pháp đo ni đóng giày theo ngành để giải quyết thách thức phức tạp và thúc đẩy chuyển đổi số doanh nghiệp.'],
  'hero.explore': ['Explore Industry Solutions', 'Khám phá giải pháp theo ngành'],
  'hero.tiles': ['Start with your sector', 'Bắt đầu từ lĩnh vực của bạn'],
  'hero.more': ['More sectors', 'Các lĩnh vực khác'],
  'flow.kicker': ['How every story is told', 'Mỗi câu chuyện được kể thế nào'],
  'flow.1t': ['The context', 'Bối cảnh'],
  'flow.1d': ['A real pain point from Vietnamese enterprises.', 'Một điểm nghẽn thật của doanh nghiệp Việt Nam.'],
  'flow.2t': ['The strategic entry point', 'Cửa ngõ chiến lược'],
  'flow.2d': ['The one place to stop it early.', 'Điểm duy nhất để chặn sớm.'],
  'flow.3t': ['The packaged solution', 'Gói giải pháp'],
  'flow.3d': ['Alliance technology, packaged by industry.', 'Công nghệ liên minh, đóng gói theo ngành.'],
  'ind.kicker': ['Choose your industry', 'Chọn ngành của bạn'],
  'ind.title': ['Context first, solution second', 'Bối cảnh trước, giải pháp sau'],
  'ind.sub': ['Pick your sector. We walk you from the real-world problem to the packaged solution in under two minutes.', 'Chọn lĩnh vực của bạn. Chúng tôi dẫn bạn từ vấn đề thực tế đến gói giải pháp trong chưa đầy hai phút.'],
  'ind.tabs': ['Industries', 'Các ngành'],
  'ind.glance': ['A story in one glance', 'Câu chuyện trong một cái nhìn'],
  'ind.illustrative': ['Illustrative scenario', 'Tình huống minh họa'],
  'ind.packaged': ['Packaged for this industry', 'Đóng gói cho ngành này'],
  'ind.regs': ['Regulatory context', 'Bối cảnh pháp lý'],
  'ind.archKicker': ['Alliance architecture', 'Kiến trúc liên minh'],
  'ind.archTitle': ['One package, three layers of defense', 'Một gói, ba lớp bảo vệ'],
  'ind.tierEdge': ['Edge & cloud', 'Biên & đám mây'],
  'ind.tierData': ['Data protection', 'Bảo vệ dữ liệu'],
  'ind.tierAi': ['AI & automation', 'AI & tự động hóa'],
  'ind.outcomes': ['Why choose V-Tech Foundry', 'Vì sao chọn V-Tech Foundry'],
  'ind.moreKicker': ['Go deeper', 'Đi sâu hơn'],
  'ind.moreTitle': ['More challenges in', 'Thêm thách thức trong ngành'],
  'ind.challenge': ['Challenge', 'Thách thức'],
  'ind.of': ['of', 'trên'],
  'ind.prev': ['Previous', 'Trước'],
  'ind.next': ['Next', 'Tiếp'],
  'ind.felt': ['Felt by', 'Người cảm nhận'],
  'ind.context': ['Context', 'Bối cảnh'],
  'ind.entry': ['Entry point', 'Cửa ngõ'],
  'ind.solution': ['Solution', 'Giải pháp'],
  'ind.faq': ['Frequently asked questions', 'Câu hỏi thường gặp'],
  'ind.pocKicker': ['Proof of concept', 'Thử nghiệm PoC'],
  'ind.pocTitle': ['Need a dedicated PoC test environment?', 'Cần môi trường PoC riêng để kiểm chứng?'],
  'ind.pocP': ['V-TECH FOUNDRY technical architects can deploy a custom Proof-of-Concept environment, load test, and security audit for your enterprise within 14 business days.', 'Kiến trúc sư V-TECH FOUNDRY có thể triển khai môi trường PoC riêng, kiểm thử tải và đánh giá an ninh cho doanh nghiệp của bạn trong vòng 14 ngày làm việc.'],
  'ind.pocBtn': ['Request PoC Sandbox', 'Yêu cầu môi trường PoC'],
  'ally.kicker': ['Strategic alliance signing', 'Lễ ký kết liên minh chiến lược'],
  'ally.title': ['VPBank - VNETWORK Alliance', 'Liên minh VPBank - VNETWORK'],
  'ally.body': ['Where a leading Vietnamese bank and VNETWORK align on secure, sovereign digital infrastructure for finance.', 'Nơi một ngân hàng hàng đầu Việt Nam và VNETWORK cùng hướng tới hạ tầng số an toàn, chủ quyền cho ngành tài chính.'],
  'ally.alt': ['Representatives of VPBank and VNETWORK at the strategic alliance signing', 'Đại diện VPBank và VNETWORK tại lễ ký kết liên minh chiến lược'],
  'sol.kicker': ['The portfolio', 'Danh mục giải pháp'],
  'sol.title': ['Building blocks, packaged by industry', 'Các khối giải pháp, đóng gói theo ngành'],
  'sol.all': ['All solutions', 'Tất cả giải pháp'],
  'sol.featured': ['Featured', 'Nổi bật'],
  'sol.overview': ['Overview', 'Tổng quan'],
  'sol.features': ['Core features', 'Tính năng cốt lõi'],
  'sol.results': ['Key results', 'Kết quả nổi bật'],
  'sol.provider': ['Solution partner', 'Đối tác giải pháp'],
  'sol.usedIn': ['Used in these industries', 'Được dùng trong các ngành'],
  'sol.talk': ['Talk to an expert', 'Trao đổi với chuyên gia'],
  'sol.layer': ['Layer', 'Lớp'],
  'exp.kicker': ['Meet V-Tech Foundry', 'Về V-Tech Foundry'],
  'exp.title': ['Experts & Advisory Board', 'Chuyên gia & Hội đồng cố vấn'],
  'exp.sub': ['The practitioners who shape our alliance and stand behind every packaged solution.', 'Những người làm nghề định hình liên minh và đứng sau từng gói giải pháp.'],
  'exp.domain': ['Domain', 'Lĩnh vực'],
  'exp.pending': ['Profile to be added from the existing site.', 'Hồ sơ sẽ được bổ sung từ trang hiện có.'],
  'cta.kicker': ['Get in touch', 'Liên hệ'],
  'cta.title': ["Ready to Scale on Vietnam's Most Trusted Tech Foundry?", 'Sẵn sàng phát triển cùng Tech Foundry đáng tin cậy nhất Việt Nam?'],
  'cta.p': ['Tell us your situation. A V-TECH FOUNDRY expert replies within one business day, or reach us instantly.', 'Hãy cho chúng tôi biết tình huống của bạn. Chuyên gia V-TECH FOUNDRY phản hồi trong một ngày làm việc, hoặc liên hệ ngay lập tức.'],
  'cta.tabBook': ['Book a consultation', 'Đặt lịch tư vấn'],
  'cta.tabBrief': ['Get the solution brief', 'Nhận tài liệu giải pháp'],
  'cta.name': ['Full name', 'Họ và tên'],
  'cta.company': ['Company', 'Công ty'],
  'cta.email': ['Work email', 'Email công việc'],
  'cta.phone': ['Phone / Zalo', 'Điện thoại / Zalo'],
  'cta.industry': ['Industry', 'Ngành'],
  'cta.need': ['What would you like to solve?', 'Bạn muốn giải quyết vấn đề gì?'],
  'cta.sendBook': ['Request consultation', 'Gửi yêu cầu tư vấn'],
  'cta.sendBrief': ['Send me the brief', 'Gửi tài liệu cho tôi'],
  'cta.consent': ['I agree to be contacted about V-TECH FOUNDRY solutions.', 'Tôi đồng ý được liên hệ về các giải pháp của V-TECH FOUNDRY.'],
  'cta.required': ['Please complete this field', 'Vui lòng điền thông tin này'],
  'cta.badEmail': ['Enter a valid email', 'Nhập email hợp lệ'],
  'cta.needConsent': ['Please tick the box to continue', 'Vui lòng đánh dấu để tiếp tục'],
  'cta.call': ['Call us', 'Gọi cho chúng tôi'],
  'cta.mail': ['Email sales', 'Email bộ phận kinh doanh'],
  'cta.select': ['Select…', 'Chọn…'],
  'cta.other': ['Other', 'Khác'],
  'cta.demo': ['Preview form: requests are not transmitted yet. Please call or email to reach the team.', 'Biểu mẫu xem trước: yêu cầu chưa được gửi đi. Vui lòng gọi điện hoặc email để liên hệ.'],
  'cta.copy': ['Copy', 'Sao chép'],
  'cta.copied': ['Copied', 'Đã chép'],
  'cta.thanksT': ['Request captured in this preview.', 'Yêu cầu đã được ghi nhận trong bản xem trước.'],
  'cta.again': ['Send another request', 'Gửi yêu cầu khác'],
  'foot.powered': ['Powered by', 'Vận hành bởi'],
  'foot.terms': ['Terms of Service', 'Điều khoản dịch vụ'],
  'foot.privacy': ['Privacy Policy', 'Chính sách bảo mật'],
  'foot.rights': ['All rights reserved.', 'Bảo lưu mọi quyền.']
};

const CONTACT = {
  phone: '+842873068789', phoneDisplay: '(+84) 28 7306 8789', email: 'contact@vnetwork.vn', website: 'https://vnetwork.vn',
  zalo: 'https://zalo.me/842873068789',
  offices: [
    { en: 'Level 23, UOA Tower, 6 Tan Trao, Tan My Ward, Ho Chi Minh City, Vietnam', vi: 'Tầng 23, Tòa nhà UOA, 6 Tân Trào, Phường Tân Mỹ, TP. Hồ Chí Minh, Việt Nam' },
    { en: '111 North Bridge Road #17-06 Peninsula Plaza, Singapore', vi: '111 North Bridge Road #17-06 Peninsula Plaza, Singapore' }
  ]
};

const FONT_HREF = 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500..800&family=Inter:wght@400..700&display=swap';
const CSS = `
.vt{font-family:Inter,"Be Vietnam Pro",system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;color:#0f172a;background:#fff;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}
.vt-d{font-family:"Plus Jakarta Sans",Inter,"Be Vietnam Pro",system-ui,-apple-system,"Segoe UI",Roboto,Arial,sans-serif;font-weight:800;letter-spacing:-0.02em;text-wrap:balance}
.vt-fade{animation:vtFade .2s ease-out both}
@keyframes vtFade{from{opacity:0}to{opacity:1}}
@media (prefers-reduced-motion:reduce){.vt-fade{animation:none}.vt *{transition:none!important}}
.vt button:focus-visible,.vt a:focus-visible,.vt input:focus-visible,.vt select:focus-visible,.vt textarea:focus-visible{outline:2px solid #dc2626;outline-offset:2px}
.vt [id]{scroll-margin-top:5.5rem}
.vt-dots{background-image:radial-gradient(#cbd5e1 1px,transparent 1px);background-size:18px 18px}
`;

const FLAG = { en: 'EN', vi: 'VI' };
const TONE = {
  manufacturing: 'from-amber-50 to-orange-100', healthcare: 'from-emerald-50 to-teal-100', bfsi: 'from-sky-50 to-blue-100',
  retail: 'from-rose-50 to-pink-100', government: 'from-slate-50 to-indigo-100', logistics: 'from-cyan-50 to-sky-100',
  media: 'from-fuchsia-50 to-rose-100', education: 'from-lime-50 to-emerald-100', alliance: 'from-slate-50 to-sky-100'
};
const SOL_BY_ID = Object.fromEntries(DATA.solutions.map((s) => [s.id, s]));
const IND_BY_ID = Object.fromEntries(DATA.industries.map((i) => [i.id, i]));
const KEY_IMAGED = DATA.industries.filter((i) => i.image);
const OTHERS = DATA.industries.filter((i) => !i.image);

/* ---------------------------------------------------------------- small pieces */
function Fade({ k, children, className = '' }) { return <div key={k} className={`vt-fade ${className}`}>{children}</div>; }

function Art({ icon, tone, label }) {
  return (
    <div className={`vt-dots relative flex h-full w-full items-center justify-center bg-gradient-to-br ${tone}`} role="img" aria-label={label}>
      <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white text-slate-800 shadow-lg ring-1 ring-slate-200">
        <Ic name={icon} className="h-10 w-10" strokeWidth={1.5} />
      </div>
    </div>
  );
}

/* Tries each URL in turn; if every one fails (offline, hotlink blocked, sandbox CSP) it shows the bright illustrated fallback.
   The scrim and white caption render through `children(loaded)` only once a real photo has loaded, so they never darken the fallback. */
function Photo({ srcs, alt, art, className = '', children }) {
  const list = srcs.filter(Boolean);
  const sig = list.join('|');
  const [i, setI] = useState(0);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setI(0); setLoaded(false); }, [sig]);
  const ok = i < list.length;
  return (
    <div className={`group relative overflow-hidden bg-slate-100 ${className}`}>
      {ok ? <img key={list[i]} src={list[i]} alt={alt} loading="lazy" referrerPolicy="no-referrer" onLoad={() => setLoaded(true)} onError={() => { setLoaded(false); setI((n) => n + 1); }} className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105" /> : art}
      {loaded && children && <span className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-slate-900/70 to-transparent" />}
      {children && children(loaded)}
    </div>
  );
}

function Kicker({ children }) { return <p className="text-xs font-bold uppercase tracking-widest text-red-600">{children}</p>; }
function H2({ children }) { return <h2 className="vt-d mt-2 text-3xl tracking-tight text-slate-900 sm:text-4xl">{children}</h2>; }
const wrap = 'mx-auto w-full max-w-6xl px-4 sm:px-6';

/* ---------------------------------------------------------------- main component */
export default function VTechFoundry() {
  const [lang, setLang] = useState(() => { try { return localStorage.getItem('vtf-lang') === 'vi' ? 'vi' : 'en'; } catch { return 'en'; } });
  const [menu, setMenu] = useState(null);
  const [mobile, setMobile] = useState(false);
  const [indId, setIndId] = useState(DATA.industries[0].id);
  const [chIdx, setChIdx] = useState(0);
  const [faqOpen, setFaqOpen] = useState(0);
  const [layer, setLayer] = useState('all');
  const [solId, setSolId] = useState('ai-agent');
  const [mode, setMode] = useState('book');
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', industry: '', need: '', consent: false });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState('');
  const navRef = useRef(null);

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
    const close = (e) => { if (navRef.current && !navRef.current.contains(e.target)) setMenu(null); };
    const esc = (e) => { if (e.key === 'Escape') { setMenu(null); setMobile(false); } };
    document.addEventListener('mousedown', close);
    document.addEventListener('keydown', esc);
    return () => { document.removeEventListener('mousedown', close); document.removeEventListener('keydown', esc); };
  }, []);

  const ind = IND_BY_ID[indId];
  const ch = ind.chapters[chIdx];
  const sol = SOL_BY_ID[solId];

  const goTo = (id) => {
    setMenu(null); setMobile(false);
    requestAnimationFrame(() => { const el = document.getElementById(id); if (el) el.scrollIntoView({ block: 'start' }); });
  };
  const openIndustry = (id) => { setIndId(id); setChIdx(0); setFaqOpen(0); goTo('industries'); };
  const openSolution = (id) => { setSolId(id); setLayer('all'); goTo('solutions'); };
  const pickIndustry = (id) => { setIndId(id); setChIdx(0); setFaqOpen(0); };
  const stepCh = (d) => setChIdx((i) => (i + d + ind.chapters.length) % ind.chapters.length);

  const copy = async (text, key) => {
    try { await navigator.clipboard.writeText(text); } catch {
      try {
        const ta = document.createElement('textarea'); ta.value = text; ta.setAttribute('readonly', ''); ta.style.position = 'fixed'; ta.style.opacity = '0';
        document.body.appendChild(ta); ta.select(); document.execCommand('copy'); document.body.removeChild(ta);
      } catch { /* copy unavailable: the text stays selectable on screen */ }
    }
    setCopied(key); setTimeout(() => setCopied(''), 1500);
  };

  const setField = (k, v) => { setForm((f) => ({ ...f, [k]: v })); setErrors((e) => ({ ...e, [k]: '' })); };
  const submit = (e) => {
    e.preventDefault();
    const er = {};
    ['name', 'company', 'email', 'phone'].forEach((k) => { if (!form[k].trim()) er[k] = u('cta.required'); });
    if (!er.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) er.email = u('cta.badEmail');
    if (!form.consent) er.consent = u('cta.needConsent');
    setErrors(er);
    if (!Object.keys(er).length) setSent(true);
  };

  const glanceTiers = useMemo(() => {
    const tiers = [['edge', 'ind.tierEdge', 'shield-alert'], ['data', 'ind.tierData', 'database'], ['ai', 'ind.tierAi', 'bot']];
    return tiers.map(([key, label, icon]) => ({ key, label, icon, items: ind.bundle.map((id) => SOL_BY_ID[id]).filter((s) => s && s.layer === key) })).filter((t) => t.items.length);
  }, [ind]);

  const layers = [['all', u('sol.all')], ['edge', u('ind.tierEdge')], ['data', u('ind.tierData')], ['ai', u('ind.tierAi')]];
  const shownSols = DATA.solutions.filter((s) => layer === 'all' || s.layer === layer);

  /* ------------------------------------------------------------ render */
  const navBtn = 'inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-semibold text-slate-700 transition-colors duration-200 hover:bg-slate-100 hover:text-slate-900';
  const menuItem = 'flex w-full items-start gap-3 rounded-xl px-3 py-2.5 text-left transition-colors duration-200 hover:bg-slate-50';

  return (
    <div className="vt min-h-screen">
      <style>{CSS}</style>

      {/* ---- Header ---- */}
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/85 backdrop-blur">
        <div className={`${wrap} flex h-16 items-center justify-between gap-3`} ref={navRef}>
          <button type="button" onClick={() => goTo('top')} className="flex items-center gap-2" aria-label="V-TECH FOUNDRY">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-600 text-sm font-extrabold text-white">V</span>
            <span className="vt-d text-base tracking-tight text-slate-900">V-TECH <span className="text-red-600">FOUNDRY</span></span>
          </button>

          <nav className="relative hidden items-center gap-1 lg:flex" aria-label={u('nav.primary')}>
            {[
              ['solutions', u('nav.solutions')],
              ['industry', u('nav.industry')],
              ['meet', u('nav.meet')]
            ].map(([key, label]) => (
              <div key={key} className="relative">
                <button type="button" className={navBtn} aria-expanded={menu === key} aria-haspopup="true" onClick={() => setMenu(menu === key ? null : key)}>
                  {label}<ChevronDown className={`h-4 w-4 transition-transform duration-200 ${menu === key ? 'rotate-180' : ''}`} aria-hidden="true" />
                </button>
                {menu === key && (
                  <div className="vt-fade absolute left-0 top-full mt-2 w-80 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl">
                    {key === 'solutions' && DATA.solutions.map((s) => (
                      <button key={s.id} type="button" className={menuItem} onClick={() => openSolution(s.id)}>
                        <Ic name={s.icon} className="mt-0.5 h-5 w-5 shrink-0 text-red-600" strokeWidth={1.75} />
                        <span><span className="block text-sm font-semibold text-slate-900">{s.name}</span><span className="block text-xs text-slate-500">{tx(s.tagline)}</span></span>
                      </button>
                    ))}
                    {key === 'industry' && DATA.industries.map((i) => (
                      <button key={i.id} type="button" className={menuItem} onClick={() => openIndustry(i.id)}>
                        <Ic name={i.icon} className="mt-0.5 h-5 w-5 shrink-0 text-red-600" strokeWidth={1.75} />
                        <span><span className="block text-sm font-semibold text-slate-900">{tx(i.name)}</span></span>
                      </button>
                    ))}
                    {key === 'meet' && (
                      <>
                        <button type="button" className={menuItem} onClick={() => goTo('alliance')}>
                          <Building2 className="mt-0.5 h-5 w-5 shrink-0 text-red-600" strokeWidth={1.75} aria-hidden="true" />
                          <span className="text-sm font-semibold text-slate-900">{u('nav.about')}</span>
                        </button>
                        <button type="button" className={menuItem} onClick={() => goTo('experts')}>
                          <Users className="mt-0.5 h-5 w-5 shrink-0 text-red-600" strokeWidth={1.75} aria-hidden="true" />
                          <span className="text-sm font-semibold text-slate-900">{u('nav.expert')}</span>
                        </button>
                      </>
                    )}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="flex items-center rounded-full border border-slate-200 p-0.5 text-xs font-bold" role="group" aria-label={u('nav.lang')}>
              {['en', 'vi'].map((l) => (
                <button key={l} type="button" aria-pressed={lang === l} onClick={() => setLang(l)}
                  className={`rounded-full px-3 py-1.5 transition-colors duration-200 ${lang === l ? 'bg-slate-900 text-white' : 'text-slate-600 hover:text-slate-900'}`}>{FLAG[l]}</button>
              ))}
            </div>
            <button type="button" onClick={() => goTo('contact')} className="hidden rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-red-700 sm:inline-flex">{u('nav.request')}</button>
            <button type="button" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 lg:hidden" aria-label={mobile ? u('nav.close') : u('nav.menu')} aria-expanded={mobile} onClick={() => setMobile((m) => !m)}>
              {mobile ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
            </button>
          </div>
        </div>
        {mobile && (
          <div className="vt-fade border-t border-slate-200 bg-white lg:hidden">
            <div className={`${wrap} flex flex-col gap-1 py-3`}>
              {[['industries', u('nav.industry')], ['solutions', u('nav.solutions')], ['alliance', u('nav.about')], ['experts', u('nav.expert')], ['contact', u('nav.request')]].map(([id, label]) => (
                <button key={id} type="button" onClick={() => goTo(id)} className="rounded-xl px-3 py-3 text-left text-sm font-semibold text-slate-800 hover:bg-slate-50">{label}</button>
              ))}
            </div>
          </div>
        )}
      </header>

      <main id="top">
        {/* ---- Hero ---- */}
        <section className="bg-white">
          <div className={`${wrap} grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-12 lg:py-20`}>
            <div className="min-w-0 lg:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700">
                <span className="h-1.5 w-1.5 rounded-full bg-red-600" aria-hidden="true" />{u('hero.eyebrow')}
              </span>
              <h1 className="vt-d mt-5 text-3xl tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">{u('hero.title')}</h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">{u('hero.sub')}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <button type="button" onClick={() => goTo('industries')} className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-slate-700">{u('hero.explore')}<ArrowRight className="h-4 w-4" aria-hidden="true" /></button>
                <button type="button" onClick={() => goTo('contact')} className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-colors duration-200 hover:bg-slate-50">{u('nav.request')}</button>
              </div>
              <div className="mt-10">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500">{u('flow.kicker')}</p>
                <ol className="mt-3 grid gap-3 sm:grid-cols-3">
                  {[['1', AlertTriangle], ['2', Target], ['3', Package]].map(([n, Icon]) => (
                    <li key={n} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <Icon className="h-5 w-5 text-red-600" strokeWidth={1.75} aria-hidden="true" />
                      <p className="mt-2 text-sm font-bold text-slate-900">{u(`flow.${n}t`)}</p>
                      <p className="mt-1 text-xs leading-relaxed text-slate-600">{u(`flow.${n}d`)}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="min-w-0 lg:col-span-5">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-500">{u('hero.tiles')}</p>
              <div className="grid grid-cols-2 gap-3">
                {KEY_IMAGED.map((i) => (
                  <button key={i.id} type="button" onClick={() => openIndustry(i.id)} className="block text-left">
                    <Photo srcs={[i.image]} alt={tx(i.name)} art={<Art icon={i.icon} tone={TONE[i.id]} label={tx(i.name)} />} className="h-40 rounded-2xl ring-1 ring-slate-200 sm:h-48">
                      {(ok) => <span className={`absolute inset-x-3 bottom-3 flex items-center justify-between gap-2 text-sm font-bold ${ok ? 'text-white' : 'text-slate-900'}`}>{tx(i.name)}<ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" /></span>}
                    </Photo>
                  </button>
                ))}
              </div>
              <p className="mb-2 mt-5 text-xs font-bold uppercase tracking-widest text-slate-500">{u('hero.more')}</p>
              <div className="flex flex-wrap gap-2">
                {OTHERS.map((i) => (
                  <button key={i.id} type="button" onClick={() => openIndustry(i.id)} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 transition-colors duration-200 hover:border-slate-300 hover:bg-slate-50">
                    <Ic name={i.icon} className="h-4 w-4 text-red-600" strokeWidth={1.75} />{tx(i.name)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ---- Industries: context -> entry point -> packaged solution ---- */}
        <section id="industries" className="bg-slate-50 py-16 sm:py-20">
          <div className={wrap}>
            <div className="max-w-2xl"><Kicker>{u('ind.kicker')}</Kicker><H2>{u('ind.title')}</H2><p className="mt-3 text-base leading-relaxed text-slate-600">{u('ind.sub')}</p></div>

            <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label={u('ind.tabs')}>
              {DATA.industries.map((i) => (
                <button key={i.id} type="button" role="tab" aria-selected={i.id === indId} onClick={() => pickIndustry(i.id)}
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors duration-200 ${i.id === indId ? 'border-slate-900 bg-slate-900 text-white' : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'}`}>
                  <Ic name={i.icon} className="h-4 w-4" strokeWidth={1.75} />{tx(i.name)}
                </button>
              ))}
            </div>

            <Fade k={ind.id} className="mt-8 space-y-6">
              <div className="grid gap-6 lg:grid-cols-12">
                {/* image + identity */}
                <div className="min-w-0 self-start overflow-hidden rounded-3xl border border-slate-200 bg-white lg:col-span-5">
                  <Photo srcs={[ind.image]} alt={tx(ind.name)} art={<Art icon={ind.icon} tone={TONE[ind.id]} label={tx(ind.name)} />} className="h-56 sm:h-72" />
                  <div className="p-6">
                    <h3 className="vt-d text-2xl tracking-tight text-slate-900">{tx(ind.title)}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{tx(ind.tagline)}</p>
                    {ind.regs.length > 0 && (
                      <>
                        <p className="mt-5 text-xs font-bold uppercase tracking-widest text-slate-500">{u('ind.regs')}</p>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {ind.regs.map((r, k) => <span key={k} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">{tx(r)}</span>)}
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* story in one glance */}
                <div className="min-w-0 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 lg:col-span-7">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="text-xs font-bold uppercase tracking-widest text-red-600">{u('ind.glance')}</p>
                    <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-800 ring-1 ring-amber-200">{u('ind.illustrative')}</span>
                  </div>

                  <ol className="mt-6 space-y-6">
                    <li className="flex gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-50 text-amber-700 ring-1 ring-amber-200"><AlertTriangle className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" /></span>
                      <div className="min-w-0">
                        <p className="text-xs font-bold uppercase tracking-widest text-slate-500">{u('flow.1t')}</p>
                        <h4 className="vt-d mt-1 text-xl tracking-tight text-slate-900">{tx(ind.story.context.title)}</h4>
                        <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">{tx(ind.story.context.body)}</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-600 ring-1 ring-red-200"><Target className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" /></span>
                      <div className="min-w-0 flex-1 rounded-2xl border border-red-200 bg-red-50/60 p-4">
                        <p className="text-xs font-bold uppercase tracking-widest text-red-700">{u('flow.2t')}</p>
                        <h4 className="vt-d mt-1 text-xl tracking-tight text-slate-900">{tx(ind.story.entry.title)}</h4>
                        <p className="mt-2 text-sm leading-relaxed text-slate-700 sm:text-base">{tx(ind.story.entry.body)}</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200"><Package className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" /></span>
                      <div className="min-w-0">
                        <p className="text-xs font-bold uppercase tracking-widest text-slate-500">{u('flow.3t')}</p>
                        <p className="mt-1 text-sm font-semibold text-slate-900">{u('ind.packaged')}</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {ind.bundle.map((id) => (
                            <button key={id} type="button" onClick={() => openSolution(id)} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-800 transition-colors duration-200 hover:border-slate-400">
                              <Ic name={SOL_BY_ID[id].icon} className="h-4 w-4 text-red-600" strokeWidth={1.75} />{SOL_BY_ID[id].name}
                            </button>
                          ))}
                        </div>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>

              {/* challenge navigator */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
                <div className="flex flex-wrap items-end justify-between gap-4">
                  <div><Kicker>{u('ind.moreKicker')}</Kicker><h3 className="vt-d mt-1 text-2xl tracking-tight text-slate-900">{u('ind.moreTitle')} {tx(ind.name)}</h3></div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold tabular-nums text-slate-600">{u('ind.challenge')} {chIdx + 1} {u('ind.of')} {ind.chapters.length}</span>
                    <button type="button" onClick={() => stepCh(-1)} className="inline-flex h-10 items-center gap-1 rounded-full border border-slate-200 px-3 text-sm font-semibold text-slate-700 transition-colors duration-200 hover:bg-slate-50" aria-label={u('ind.prev')}><ChevronLeft className="h-4 w-4" aria-hidden="true" /><span className="hidden sm:inline">{u('ind.prev')}</span></button>
                    <button type="button" onClick={() => stepCh(1)} className="inline-flex h-10 items-center gap-1 rounded-full bg-slate-900 px-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-slate-700" aria-label={u('ind.next')}><span className="hidden sm:inline">{u('ind.next')}</span><ChevronRight className="h-4 w-4" aria-hidden="true" /></button>
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap gap-2" role="tablist" aria-label={u('ind.moreTitle')}>
                  {ind.chapters.map((c, k) => (
                    <button key={c.id} type="button" role="tab" aria-selected={k === chIdx} onClick={() => setChIdx(k)}
                      className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors duration-200 ${k === chIdx ? 'border-red-600 bg-red-50 text-red-700' : 'border-slate-200 text-slate-600 hover:border-slate-300'}`}>{tx(c.persona)}</button>
                  ))}
                </div>
                <Fade k={`${ind.id}-${ch.id}`} className="mt-6 grid gap-4 lg:grid-cols-3">
                  <div className="min-w-0 rounded-2xl bg-slate-50 p-5">
                    <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-700"><AlertTriangle className="h-4 w-4" aria-hidden="true" />{u('ind.context')}</p>
                    <h4 className="vt-d mt-2 text-lg tracking-tight text-slate-900">{tx(ch.challenge.title)}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{tx(ch.challenge.body)}</p>
                    <p className="mt-3 text-xs text-slate-500">{u('ind.felt')}: <span className="font-semibold text-slate-700">{tx(ch.persona)}</span></p>
                  </div>
                  <div className="min-w-0 rounded-2xl border border-red-200 bg-red-50/60 p-5">
                    <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-700"><Target className="h-4 w-4" aria-hidden="true" />{u('ind.entry')}</p>
                    <h4 className="vt-d mt-2 text-lg tracking-tight text-slate-900">{tx(ch.response.title)}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-slate-700">{tx(ch.response.body)}</p>
                  </div>
                  <div className="min-w-0 rounded-2xl bg-slate-50 p-5">
                    <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-700"><Package className="h-4 w-4" aria-hidden="true" />{u('ind.solution')}</p>
                    <ul className="mt-3 space-y-2">
                      {ch.response.points.map((p, k) => (
                        <li key={k} className="flex gap-2 text-sm text-slate-700"><Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true" /><span>{tx(p)}</span></li>
                      ))}
                    </ul>
                    {ch.response.metric && (
                      <p className="mt-4 flex items-baseline gap-2"><span className="vt-d text-3xl tracking-tight text-slate-900">{ch.response.metric.value}</span><span className="text-xs text-slate-600">{tx(ch.response.metric.label)}</span></p>
                    )}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {ch.solutions.map((id) => (
                        <button key={id} type="button" onClick={() => openSolution(id)} className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-semibold text-slate-800 transition-colors duration-200 hover:border-slate-400">
                          <Ic name={SOL_BY_ID[id].icon} className="h-3.5 w-3.5 text-red-600" strokeWidth={1.75} />{SOL_BY_ID[id].name}
                        </button>
                      ))}
                    </div>
                  </div>
                </Fade>
              </div>

              {/* alliance architecture + outcomes */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
                <Kicker>{u('ind.archKicker')}</Kicker>
                <h3 className="vt-d mt-1 text-2xl tracking-tight text-slate-900">{u('ind.archTitle')}</h3>
                <div className="mt-6 flex flex-col items-stretch gap-3 lg:flex-row">
                  {glanceTiers.map((t, k) => (
                    <React.Fragment key={t.key}>
                      {k > 0 && <div className="flex items-center justify-center text-slate-400"><ArrowRight className="hidden h-5 w-5 lg:block" aria-hidden="true" /><ChevronDown className="h-5 w-5 lg:hidden" aria-hidden="true" /></div>}
                      <div className="min-w-0 flex-1 rounded-2xl bg-slate-50 p-4">
                        <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-600"><Ic name={t.icon} className="h-4 w-4 text-red-600" strokeWidth={1.75} />{u(t.label)}</p>
                        <div className="mt-3 space-y-2">
                          {t.items.map((s) => (
                            <button key={s.id} type="button" onClick={() => openSolution(s.id)} className="flex w-full items-start gap-3 rounded-xl border border-slate-200 bg-white p-3 text-left transition-colors duration-200 hover:border-slate-400">
                              <Ic name={s.icon} className="mt-0.5 h-5 w-5 shrink-0 text-red-600" strokeWidth={1.75} />
                              <span className="min-w-0"><span className="block text-sm font-semibold text-slate-900">{s.name}</span><span className="block text-xs leading-snug text-slate-500">{tx(s.tagline)}</span></span>
                            </button>
                          ))}
                        </div>
                      </div>
                    </React.Fragment>
                  ))}
                </div>
                <p className="mt-8 text-xs font-bold uppercase tracking-widest text-slate-500">{u('ind.outcomes')}</p>
                <div className="mt-3 grid gap-4 md:grid-cols-3">
                  {ind.outcomes.map((o, k) => (
                    <div key={k} className="rounded-2xl border border-slate-200 p-5">
                      <Award className="h-5 w-5 text-red-600" strokeWidth={1.75} aria-hidden="true" />
                      <h4 className="vt-d mt-3 text-base tracking-tight text-slate-900">{tx(o.title)}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">{tx(o.body)}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ + PoC */}
              <div className="grid gap-6 lg:grid-cols-12">
                <div className="min-w-0 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 lg:col-span-7">
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500">{u('ind.faq')}</p>
                  <div className="mt-3 divide-y divide-slate-200">
                    {ind.faq.map((f, k) => (
                      <div key={k}>
                        <button type="button" className="flex w-full items-center justify-between gap-4 py-4 text-left text-sm font-semibold text-slate-900 sm:text-base" aria-expanded={faqOpen === k} onClick={() => setFaqOpen(faqOpen === k ? -1 : k)}>
                          <span>{tx(f.q)}</span><ChevronDown className={`h-5 w-5 shrink-0 text-slate-500 transition-transform duration-200 ${faqOpen === k ? 'rotate-180' : ''}`} aria-hidden="true" />
                        </button>
                        {faqOpen === k && <p className="vt-fade pb-4 text-sm leading-relaxed text-slate-600">{tx(f.a)}</p>}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="min-w-0 rounded-3xl bg-red-600 p-6 text-white sm:p-8 lg:col-span-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-red-100">{u('ind.pocKicker')}</p>
                  <h3 className="vt-d mt-2 text-2xl tracking-tight">{u('ind.pocTitle')}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-red-50">{u('ind.pocP')}</p>
                  <button type="button" onClick={() => { setForm((f) => ({ ...f, industry: ind.id })); goTo('contact'); }} className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-red-700 transition-colors duration-200 hover:bg-red-50">{u('ind.pocBtn')}<ArrowRight className="h-4 w-4" aria-hidden="true" /></button>
                </div>
              </div>
            </Fade>
          </div>
        </section>

        {/* ---- Strategic alliance signing ---- */}
        <section id="alliance" className="bg-white py-16 sm:py-20">
          <div className={`${wrap} grid items-center gap-8 lg:grid-cols-12`}>
            <div className="min-w-0 lg:col-span-5">
              <Kicker>{u('ally.kicker')}</Kicker>
              <H2>{u('ally.title')}</H2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">{u('ally.body')}</p>
              <button type="button" onClick={() => openIndustry('bfsi')} className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-900 transition-colors duration-200 hover:bg-slate-50">{tx(IND_BY_ID.bfsi.name)}<ArrowRight className="h-4 w-4" aria-hidden="true" /></button>
            </div>
            <Photo srcs={DATA.signing.srcs} alt={u('ally.alt')} art={<Art icon="landmark" tone={TONE.alliance} label={u('ally.alt')} />} className="h-72 min-w-0 rounded-2xl ring-1 ring-slate-200 sm:h-96 lg:col-span-7">
              {(ok) => (
                <div className={`absolute inset-x-5 bottom-5 ${ok ? 'text-white' : 'text-slate-900'}`}>
                  <span className={`block text-xs font-bold uppercase tracking-widest ${ok ? 'text-white/80' : 'text-slate-500'}`}>{u('ally.kicker')}</span>
                  <span className="vt-d mt-1 block text-xl tracking-tight sm:text-2xl">{u('ally.title')}</span>
                </div>
              )}
            </Photo>
          </div>
        </section>

        {/* ---- Solutions ---- */}
        <section id="solutions" className="bg-slate-50 py-16 sm:py-20">
          <div className={wrap}>
            <div className="max-w-2xl"><Kicker>{u('sol.kicker')}</Kicker><H2>{u('sol.title')}</H2></div>
            <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label={u('sol.layer')}>
              {layers.map(([k, label]) => (
                <button key={k} type="button" role="tab" aria-selected={layer === k} onClick={() => setLayer(k)}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors duration-200 ${layer === k ? 'border-slate-900 bg-slate-900 text-white' : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'}`}>{label}</button>
              ))}
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {shownSols.map((s) => (
                <button key={s.id} type="button" onClick={() => setSolId(s.id)} aria-pressed={s.id === solId}
                  className={`flex min-w-0 items-start gap-4 rounded-2xl border bg-white p-5 text-left transition-colors duration-200 ${s.id === solId ? 'border-red-600 ring-1 ring-red-600' : 'border-slate-200 hover:border-slate-300'}`}>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-red-600"><Ic name={s.icon} className="h-6 w-6" strokeWidth={1.75} /></span>
                  <span className="min-w-0">
                    <span className="block text-sm font-bold text-slate-900">{s.name}</span>
                    <span className="mt-1 block text-xs leading-relaxed text-slate-600">{tx(s.tagline)}</span>
                    {s.id === 'ai-agent' && <span className="mt-2 inline-block rounded-full bg-red-50 px-2 py-0.5 text-xs font-semibold text-red-700">{u('sol.featured')}</span>}
                  </span>
                </button>
              ))}
            </div>

            <Fade k={sol.id} className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex min-w-0 items-center gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-red-600 text-white"><Ic name={sol.icon} className="h-7 w-7" strokeWidth={1.75} /></span>
                  <div className="min-w-0">
                    <h3 className="vt-d text-2xl tracking-tight text-slate-900 sm:text-3xl">{sol.name}</h3>
                    {sol.provider && <p className="mt-1 text-sm text-slate-600">{u('sol.provider')}: <span className="font-semibold text-slate-800">{sol.provider}</span></p>}
                  </div>
                </div>
                <button type="button" onClick={() => goTo('contact')} className="inline-flex items-center gap-2 rounded-full bg-red-600 px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-red-700">{u('sol.talk')}<ArrowRight className="h-4 w-4" aria-hidden="true" /></button>
              </div>

              {sol.tags && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {sol.tags.map((tg) => (
                    <span key={tg.tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">{tg.tag}{lang === 'en' ? <span className="font-normal text-slate-500"> · {tg.en}</span> : null}</span>
                  ))}
                </div>
              )}

              <p className="mt-6 text-xs font-bold uppercase tracking-widest text-slate-500">{u('sol.overview')}</p>
              <p className="mt-2 max-w-3xl text-base leading-relaxed text-slate-700">{tx(sol.description)}</p>

              {sol.pillars && (
                <>
                  <p className="mt-8 text-xs font-bold uppercase tracking-widest text-slate-500">{u('sol.features')}</p>
                  <ul className="mt-3 grid gap-3 md:grid-cols-2">
                    {sol.pillars.map((p, k) => (
                      <li key={k} className="flex min-w-0 gap-3 rounded-2xl bg-slate-50 p-4">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-red-600 ring-1 ring-slate-200"><Ic name={p.icon} className="h-5 w-5" strokeWidth={1.75} /></span>
                        <span className="text-sm leading-relaxed text-slate-700">{tx(p)}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {sol.metrics && (
                <>
                  <p className="mt-8 text-xs font-bold uppercase tracking-widest text-slate-500">{u('sol.results')}</p>
                  <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {sol.metrics.map((m, k) => (
                      <div key={k} className="min-w-0 rounded-2xl border border-slate-200 p-5">
                        <Ic name={m.icon} className="h-5 w-5 text-red-600" strokeWidth={1.75} />
                        <p className="vt-d mt-3 text-3xl tracking-tight text-slate-900 tabular-nums">{m.value}</p>
                        <p className="mt-1 text-xs leading-relaxed text-slate-600">{tx(m)}</p>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {(() => {
                const used = DATA.industries.filter((i) => i.bundle.includes(sol.id));
                return used.length ? (
                  <>
                    <p className="mt-8 text-xs font-bold uppercase tracking-widest text-slate-500">{u('sol.usedIn')}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {used.map((i) => (
                        <button key={i.id} type="button" onClick={() => openIndustry(i.id)} className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700 transition-colors duration-200 hover:border-slate-400">
                          <Ic name={i.icon} className="h-4 w-4 text-red-600" strokeWidth={1.75} />{tx(i.name)}
                        </button>
                      ))}
                    </div>
                  </>
                ) : null;
              })()}
            </Fade>
          </div>
        </section>

        {/* ---- Experts ---- */}
        <section id="experts" className="bg-white py-16 sm:py-20">
          <div className={wrap}>
            <div className="max-w-2xl"><Kicker>{u('exp.kicker')}</Kicker><H2>{u('exp.title')}</H2><p className="mt-3 text-base leading-relaxed text-slate-600">{u('exp.sub')}</p></div>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {DATA.experts.map((e) => (
                <article key={e.id} className="flex min-w-0 flex-col rounded-3xl border border-slate-200 bg-white p-6">
                  <div className="flex items-center gap-4">
                    <Photo srcs={[e.photo]} alt={tx(e.name)} className="h-16 w-16 shrink-0 rounded-full" art={<div className="vt-d flex h-full w-full items-center justify-center bg-slate-900 text-lg text-white" role="img" aria-label={tx(e.name)}>{e.initials}</div>} />
                    <div className="min-w-0">
                      <h3 className="vt-d text-lg tracking-tight text-slate-900">{tx(e.name)}</h3>
                      {e.role && <p className="mt-0.5 text-sm font-medium text-slate-600">{tx(e.role)}</p>}
                    </div>
                  </div>
                  {e.domain && (
                    <p className="mt-4 rounded-xl bg-red-50 px-3 py-2 text-xs font-semibold leading-relaxed text-red-700"><span className="uppercase tracking-widest">{u('exp.domain')}</span>: {tx(e.domain)}</p>
                  )}
                  {e.bio ? <p className="mt-4 text-sm leading-relaxed text-slate-600">{tx(e.bio)}</p> : <p className="mt-4 text-sm italic text-slate-400">{u('exp.pending')}</p>}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---- Contact ---- */}
        <section id="contact" className="bg-slate-50 py-16 sm:py-20">
          <div className={`${wrap} grid gap-8 rounded-3xl lg:grid-cols-2`}>
            <div className="min-w-0">
              <Kicker>{u('cta.kicker')}</Kicker>
              <H2>{u('cta.title')}</H2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">{u('cta.p')}</p>
              <div className="mt-6 space-y-3">
                {[
                  ['call', u('cta.call'), CONTACT.phoneDisplay, `tel:${CONTACT.phone}`, Phone],
                  ['zalo', 'Zalo', CONTACT.phoneDisplay, CONTACT.zalo, MessageCircle],
                  ['mail', u('cta.mail'), CONTACT.email, `mailto:${CONTACT.email}`, Mail]
                ].map(([key, label, value, href, Icon]) => (
                  <div key={key} className="flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-4">
                    <div className="flex min-w-0 items-center gap-3">
                      <Icon className="h-5 w-5 shrink-0 text-red-600" strokeWidth={1.75} aria-hidden="true" />
                      <div className="min-w-0"><p className="text-xs text-slate-500">{label}</p><a href={href} className="block break-all text-sm font-semibold text-slate-900 hover:underline">{value}</a></div>
                    </div>
                    <button type="button" onClick={() => copy(value, key)} className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-700 transition-colors duration-200 hover:bg-slate-50">
                      {copied === key ? <Check className="h-3.5 w-3.5 text-emerald-600" aria-hidden="true" /> : <Copy className="h-3.5 w-3.5" aria-hidden="true" />}{copied === key ? u('cta.copied') : u('cta.copy')}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="min-w-0 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
              {sent ? (
                <div className="vt-fade py-8 text-center" role="status">
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600"><Check className="h-6 w-6" aria-hidden="true" /></span>
                  <h3 className="vt-d mt-4 text-xl tracking-tight text-slate-900">{u('cta.thanksT')}</h3>
                  <p className="mx-auto mt-2 max-w-sm text-sm text-slate-600">{u('cta.demo')}</p>
                  <button type="button" onClick={() => { setSent(false); setForm({ name: '', company: '', email: '', phone: '', industry: '', need: '', consent: false }); }} className="mt-5 rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-50">{u('cta.again')}</button>
                </div>
              ) : (
                <form onSubmit={submit} noValidate>
                  <div className="flex gap-1 rounded-full bg-slate-100 p-1" role="tablist">
                    {[['book', u('cta.tabBook')], ['brief', u('cta.tabBrief')]].map(([k, label]) => (
                      <button key={k} type="button" role="tab" aria-selected={mode === k} onClick={() => setMode(k)} className={`flex-1 rounded-full px-3 py-2 text-xs font-semibold transition-colors duration-200 sm:text-sm ${mode === k ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600'}`}>{label}</button>
                    ))}
                  </div>
                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    {[['name', 'cta.name', 'text', 'name'], ['company', 'cta.company', 'text', 'organization'], ['email', 'cta.email', 'email', 'email'], ['phone', 'cta.phone', 'tel', 'tel']].map(([k, label, type, ac]) => (
                      <div key={k}>
                        <label htmlFor={`vtf-${k}`} className="text-xs font-semibold text-slate-700">{u(label)}</label>
                        <input id={`vtf-${k}`} type={type} autoComplete={ac} value={form[k]} onChange={(e) => setField(k, e.target.value)} aria-invalid={!!errors[k]}
                          className={`mt-1 w-full rounded-xl border bg-white px-3 py-2.5 text-sm text-slate-900 ${errors[k] ? 'border-red-500' : 'border-slate-300'}`} />
                        <p className="mt-1 min-h-4 text-xs text-red-600" aria-live="polite">{errors[k]}</p>
                      </div>
                    ))}
                    <div className="sm:col-span-2">
                      <label htmlFor="vtf-industry" className="text-xs font-semibold text-slate-700">{u('cta.industry')}</label>
                      <select id="vtf-industry" value={form.industry} onChange={(e) => setField('industry', e.target.value)} className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900">
                        <option value="">{u('cta.select')}</option>
                        {DATA.industries.map((i) => <option key={i.id} value={i.id}>{tx(i.name)}</option>)}
                        <option value="other">{u('cta.other')}</option>
                      </select>
                    </div>
                    {mode === 'book' && (
                      <div className="sm:col-span-2">
                        <label htmlFor="vtf-need" className="text-xs font-semibold text-slate-700">{u('cta.need')}</label>
                        <textarea id="vtf-need" rows={3} value={form.need} onChange={(e) => setField('need', e.target.value)} className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900" />
                      </div>
                    )}
                  </div>
                  <label htmlFor="vtf-consent" className="mt-2 flex items-start gap-2 text-xs text-slate-600">
                    <input id="vtf-consent" type="checkbox" checked={form.consent} onChange={(e) => setField('consent', e.target.checked)} className="mt-0.5 h-4 w-4" /><span>{u('cta.consent')}</span>
                  </label>
                  <p className="mt-1 min-h-4 text-xs text-red-600" aria-live="polite">{errors.consent}</p>
                  <p className="mt-2 text-xs text-slate-500">{u('cta.demo')}</p>
                  <button type="submit" className="mt-4 inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-red-700">{u(mode === 'book' ? 'cta.sendBook' : 'cta.sendBrief')}<ArrowRight className="h-4 w-4" aria-hidden="true" /></button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* ---- Footer ---- */}
      <footer className="border-t border-slate-200 bg-white">
        <div className={`${wrap} py-12`}>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="min-w-0">
              <div className="flex items-center gap-2"><span className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-600 text-sm font-extrabold text-white">V</span><span className="vt-d text-base tracking-tight text-slate-900">V-TECH <span className="text-red-600">FOUNDRY</span></span></div>
              <p className="mt-4 text-sm text-slate-600">{u('foot.powered')} <a href={CONTACT.website} target="_blank" rel="noopener noreferrer" className="font-bold text-slate-900 hover:underline">VNETWORK</a></p>
            </div>
            <div className="min-w-0 space-y-2 text-sm text-slate-600">
              <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-red-600" aria-hidden="true" />{CONTACT.phoneDisplay}</p>
              <p className="flex items-center gap-2 break-all"><Mail className="h-4 w-4 shrink-0 text-red-600" aria-hidden="true" />{CONTACT.email}</p>
              <p className="flex items-center gap-2"><Globe className="h-4 w-4 text-red-600" aria-hidden="true" /><a href={CONTACT.website} target="_blank" rel="noopener noreferrer" className="hover:underline">vnetwork.vn</a></p>
            </div>
            <div className="min-w-0 space-y-3 text-sm text-slate-600">
              {CONTACT.offices.map((o, k) => <p key={k} className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-red-600" aria-hidden="true" />{tx(o)}</p>)}
            </div>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-6 text-xs text-slate-500">
            <span>© 2013 VNETWORK JSC. {u('foot.rights')}</span>
            <span><a href={CONTACT.website} target="_blank" rel="noopener noreferrer" className="hover:underline">{u('foot.terms')}</a> · <a href={CONTACT.website} target="_blank" rel="noopener noreferrer" className="hover:underline">{u('foot.privacy')}</a></span>
          </div>
        </div>
      </footer>
    </div>
  );
}
