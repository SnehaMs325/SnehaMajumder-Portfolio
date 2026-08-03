import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { portfolioData } from '@/data/portfolioData';

export const Qualifications: React.FC = () => {
  const { education, certifications, achievements } = portfolioData;

  return (
    <section id="qualifications" className="py-20 px-4 max-w-5xl mx-auto space-y-16">
      {/* Education Section */}
      {education && education.length > 0 && (
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground mb-8">Education</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {education.map((item, idx) => (
              <Card key={idx} className="bg-card/50 backdrop-blur border-border/50">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">{item.degree}</CardTitle>
                  <p className="text-sm text-muted-foreground">{item.institution} • {item.period}</p>
                </CardHeader>
                {item.description && (
                  <CardContent>
                    <p className="text-sm text-foreground/80">{item.description}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Certifications Section */}
      {certifications && certifications.length > 0 && (
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground mb-8">Certifications</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {certifications.map((cert, idx) => (
              <Card key={idx} className="bg-card/50 backdrop-blur border-border/50">
                <CardHeader className="py-4">
                  <CardTitle className="text-lg font-medium">{cert.title}</CardTitle>
                  <p className="text-xs text-muted-foreground">{cert.issuer} • {cert.date}</p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Achievements Section */}
      {achievements && achievements.length > 0 && (
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground mb-8">Achievements</h2>
          <div className="flex flex-wrap gap-3">
            {achievements.map((achieve, idx) => (
              <Badge key={idx} variant="secondary" className="px-3 py-1.5 text-sm">
                {achieve}
              </Badge>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};