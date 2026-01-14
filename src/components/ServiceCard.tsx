import { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from '@/lib/i18n';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  iconColor?: string;
}

export function ServiceCard({ icon: Icon, title, description, href, iconColor = 'text-primary' }: ServiceCardProps) {
  const { t } = useTranslation();

  return (
    <Link to={href} className="block group">
      <div className="service-card h-full">
        <div className={`w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors`}>
          <Icon className={`w-6 h-6 ${iconColor}`} />
        </div>
        <h3 className="font-display font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
        <div className="mt-4 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
          {t('common.view_details')} →
        </div>
      </div>
    </Link>
  );
}
