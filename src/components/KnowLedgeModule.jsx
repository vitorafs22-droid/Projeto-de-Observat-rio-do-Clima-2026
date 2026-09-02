import React from 'react';
import { BookOpen, Stethoscope, Award } from 'lucide-react';

export default function KnowledgeModule() {
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '1rem' }}>
      
      <div style={{ backgroundColor: '#fff', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', marginBottom: '1rem' }}>
        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#1b5e20', marginTop: 0 }}>
          <BookOpen size={20} />
          O que é Descompensação Psicopatológica?
        </h3>
        <p style={{ color: '#444', lineHeight: '1.5', fontSize: '0.95rem' }}>
          Trata-se de uma fase na qual a pessoa com um transtorno mental (como a esquizofrenia ou transtorno bipolar) sofre uma exacerbação dos sintomas clínicos, perdendo temporariamente a capacidade de adaptação e controle emocional/comportamental. Pode incluir surtos, alucinações ou intensa agitação motor/afetiva.
        </p>
      </div>

      <div style={{ backgroundColor: '#fff', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', marginBottom: '1rem' }}>
        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#1b5e20', marginTop: 0 }}>
          <Stethoscope size={20} />
          Tratamento da Esquizofrenia em Patos de Minas
        </h3>
        <p style={{ color: '#444', lineHeight: '1.5', fontSize: '0.95rem' }}>
          Na rede municipal de Patos de Minas, o tratamento é estruturado pela **RAPS (Rede de Atenção Psicossocial)**, com o **CAPS (Centro de Atenção Psicossocial)** sendo o pilar central. O tratamento eficaz combina:
        </p>
        <ul style={{ color: '#444', fontSize: '0.95rem', paddingLeft: '1.2rem' }}>
          <li>Acompanhamento psiquiátrico e uso contínuo de medicação (antipsicóticos).</li>
          <li>Atendimento multidisciplinar (Psicologia, Terapia Ocupacional e Serviço Social).</li>
          <li>Suporte e orientação à família no manejo do dia a dia.</li>
        </ul>
      </div>

      <div style={{ backgroundColor: '#fff', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#1b5e20', marginTop: 0 }}>
          <Award size={20} />
          Eficácia do Apoio em Patos de Minas
        </h3>
        <p style={{ color: '#444', lineHeight: '1.5', fontSize: '0.95rem' }}>
          Estudos indicam que a eficácia do tratamento aumenta substancialmente quando a detecção dos sinais precoces de crise ocorre a tempo, permitindo o acolhimento imediato antes do agravamento da urgência hospitalar.
        </p>
      </div>

    </div>
  );
}