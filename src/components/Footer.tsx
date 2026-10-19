import type { FC } from 'react';
import { Mail, Shield, ExternalLink } from 'lucide-react';
import { CONFIG } from '../config';
import { IdTechLogo } from './IdTechLogo';

export const Footer: FC = () => {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/80 py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <IdTechLogo size="lg" showText={true} />
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Platform orkestrasi Autonomous AI Workforce pertama di Indonesia. Membantu perusahaan
              mempercepat inovasi rekayasa perangkat lunak, riset pasar, dan operasional bisnis 24/7.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-slate-300">
              <Mail className="w-4 h-4 text-blue-400" />
              <a
                href={`mailto:${CONFIG.contactEmail}`}
                className="hover:text-blue-400 transition-colors font-mono"
              >
                {CONFIG.contactEmail}
              </a>
            </div>
          </div>

          {/* Navigasi Platform */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Platform</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#fitur" className="hover:text-white transition-colors">
                  Fitur Unggulan
                </a>
              </li>
              <li>
                <a href="#swarm" className="hover:text-white transition-colors">
                  Solusi Tim Swarm
                </a>
              </li>
              <li>
                <a href="#arsitektur" className="hover:text-white transition-colors">
                  Keamanan Enterprise
                </a>
              </li>
              <li>
                <a href="#harga" className="hover:text-white transition-colors">
                  Daftar Paket Harga
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Solusi & Produk */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Layanan</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a
                  href={CONFIG.appConsoleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>AI Center Console</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <span className="text-slate-500">Autonomous Software Swarm</span>
              </li>
              <li>
                <span className="text-slate-500">24/7 SRE Incident Remediation</span>
              </li>
              <li>
                <span className="text-slate-500">Market Intelligence Crawler</span>
              </li>
              <li>
                <span className="text-slate-500">Enterprise Private VPC Deployment</span>
              </li>
            </ul>
          </div>

          {/* Legal & Compliance */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Kepatuhan & Trust</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <span className="hover:text-white cursor-pointer transition-colors">
                  Kebijakan Privasi
                </span>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer transition-colors">
                  Syarat & Ketentuan Layanan
                </span>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer transition-colors">
                  Service Level Agreement (SLA)
                </span>
              </li>
              <li>
                <span className="text-emerald-400/90 flex items-center gap-1.5 font-medium">
                  <Shield className="w-3.5 h-3.5" />
                  <span>Enkripsi TLS 1.3 & AES-256</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} {CONFIG.appName}. All rights reserved. Didukung oleh {CONFIG.company}.
          </div>
          <div className="flex items-center gap-2">
            <span>Server Uptime: 99.99%</span>
            <span>•</span>
            <span className="text-emerald-400 font-semibold">● Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
