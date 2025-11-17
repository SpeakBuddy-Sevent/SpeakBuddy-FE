interface LevelData {
  title: string;
  description: string;
  info: string;
  materials: string[];
  outcomes: string[];
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  bgColor: string;
}