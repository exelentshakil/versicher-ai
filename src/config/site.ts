/**
 * Versicher AI Configuration Hub
 * Central Schema & Data Provider for AI-First German Insurance Cockpit.
 */

export interface NavItem {
  id: string;
  label: string;
}

export interface MetricItem {
  id: string;
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'neutral' | 'down';
  subtext: string;
  badge: string;
}

export interface TableRow {
  id: string;
  entityName: string;
  category: string;
  status: 'active' | 'verified' | 'queued' | 'flagged';
  latency: string;
  provider: string;
  updatedAt: string;
  payload: Record<string, unknown>;
}

export interface SiteConfig {
  slug: string;
  name: string;
  badge: string;
  tagline: string;
  description: string;
  archetype: 'stripe' | 'linear' | 'notion' | 'lovable' | 'bloomberg' | 'apple';
  primaryNav: NavItem[];
  metrics: MetricItem[];
  workflow: {
    badge: string;
    title: string;
    description: string;
    inputLabel: string;
    inputPlaceholder: string;
    defaultInput: string;
    buttonLabel: string;
    sampleResponse: Record<string, unknown>;
  };
  table: {
    badge: string;
    title: string;
    description: string;
    columns: { key: string; label: string }[];
    rows: TableRow[];
  };
}

export const siteConfig: SiteConfig = {
  slug: 'versicher-ai',
  name: 'Versicher AI',
  badge: 'B2C Underwriting & B2B Engine v1.0',
  tagline: 'AI-First German Insurance Platform & Workflow Modernization',
  description: 'Autonomous insurance platform powering conversational B2C advice, deterministic quote underwriting (Haftpflicht, Hausrat, BU), and legacy paper-to-AI workflow migration with BaFin & GDPR compliance.',
  archetype: 'stripe',
  primaryNav: [
    { id: 'cockpit', label: 'Insurance Cockpit' },
    { id: 'pipeline', label: 'Underwriting AI Engine' },
    { id: 'records', label: 'Policy Ledger' },
  ],
  metrics: [
    {
      id: 'quote_to_bind',
      title: 'Quote-to-Bind Velocity',
      value: '48 Seconds',
      change: '-94% friction',
      trend: 'up',
      subtext: 'Down from 12-day traditional broker paperwork',
      badge: 'Speed Metric',
    },
    {
      id: 'eval_pass_rate',
      title: 'Underwriting Evals',
      value: '99.94%',
      change: 'Zero math drift',
      trend: 'up',
      subtext: 'Strict deterministic tariff math isolated from LLM output',
      badge: 'Eval Benchmarks',
    },
    {
      id: 'compliance_posture',
      title: 'BaFin & GDPR Posture',
      value: '100% Compliant',
      change: 'Zero PII leak',
      trend: 'up',
      subtext: 'NIST AI RMF inline PII tokenization & SHA-256 audit log',
      badge: 'Securiti Certified',
    },
    {
      id: 'legacy_workflow_roi',
      title: 'B2B Migration ROI',
      value: '82% Cost Drop',
      change: '100% AI native',
      trend: 'up',
      subtext: 'Automated legacy document OCR & GDV standard sync',
      badge: 'B2B Modernization',
    },
  ],
  workflow: {
    badge: 'Live B2C Conversational Underwriting Engine',
    title: 'Execute AI Insurance Quote & Policy Underwriting',
    description: 'Test how the platform ingests user risk disclosures, executes deterministic tariff calculations, verifies BaFin VVG § 19 compliance, and issues an instant binding policy.',
    inputLabel: 'Customer Risk Profile & Insurance Parameters:',
    inputPlaceholder: 'Enter product line, customer details, coverage limit, and risk disclosures...',
    defaultInput: 'Product: Privathaftpflicht (PHV) • Customer: Maximilian Weber (Age 34, Berlin) • Coverage Tier: Premium Single + Dog Owner Extension (Hundehaftpflicht) • Coverage Sum: €50,000,000 Pauschal • Deductible (Selbstbeteiligung): €150 • Add-on: Drohnennutzung (Private Drone) • Risk Check: No prior claims in 5 years • VVG § 19 Compliance: All statutory disclosure questions verified.',
    buttonLabel: 'Generate Binding Quote & Verify BaFin Compliance',
    sampleResponse: {
      status: 'BINDING_QUOTE_GENERATED',
      policy_reference: 'VDE-PHV-2026-8891',
      product_line: 'Privathaftpflichtversicherung (PHV Premium)',
      tariff_calculation: {
        net_monthly: '€6.85 / Monat',
        annual_total: '€82.20 / Jahr',
        versicherungssteuer_19pct: '€15.62',
        deductible: '€150 pro Schadenfall',
        coverage_limit: '€50.000.000 pauschal für Personen-, Sach- und Vermögensschäden',
      },
      deterministic_underwriting: {
        actuarial_engine: 'Deterministic tariff table (zero LLM math hallucination)',
        vvg_compliance: 'VVG § 19 vorvertragliche Anzeigepflicht passed',
        dog_extension_approved: true,
        drone_coverage_cleared: 'Private drone use up to 250g MTOW included',
        prior_claims_check: '0 claims logged in HIS database',
      },
      b2b_legacy_bridge: {
        bafin_audit_trail: 'Immutable SHA-256 state logged to PostgreSQL',
        gdpr_pii_scrubbed: 'IBAN & Tax ID tokenized before external processing',
        legacy_core_sync: 'Ready for GDV electronic data interchange (EDI)',
      },
      provider_telemetry: {
        engine: 'Claude Code Terminal Stack + OpenAI gpt-4o-mini',
        fallback_ready: 'Google Gemini 2.0 Flash',
        latency_ms: 54,
        eval_benchmark_score: '100% Deterministic Consistency',
      },
    },
  },
  table: {
    badge: 'Underwritten Policies & B2B Modernization Queue',
    title: 'Active Insurance Policies & Legacy Migration Stream',
    description: 'Real-time stream of B2C autonomous policy issuance and B2B paper-to-AI workflow transitions across German insurance categories.',
    columns: [
      { key: 'id', label: 'Policy / Batch ID' },
      { key: 'entityName', label: 'Insured / Client Organization' },
      { key: 'category', label: 'Line of Business' },
      { key: 'status', label: 'Underwriting Status' },
      { key: 'latency', label: 'Inference Latency' },
      { key: 'action', label: 'Inspection' },
    ],
    rows: [
      {
        id: 'POL-DE-9104',
        entityName: 'Maximilian Weber (Berlin)',
        category: 'Privathaftpflicht (PHV Premium)',
        status: 'verified',
        latency: '48ms',
        provider: 'Claude Code Stack',
        updatedAt: '2 mins ago',
        payload: {
          policy_id: 'VDE-PHV-2026-8891',
          coverage_sum: '€50,000,000',
          annual_premium: '€82.20 / Jahr',
          underwriting_checks: 'Dog extension + Drone endorsement approved',
          vvg_compliance: 'VVG § 19 statutory notice confirmed',
          bafin_audit: 'PASS • Deterministic actuarial rulebook verified',
          payment_method: 'SEPA Direct Debit (IBAN [TOKENIZED])',
        },
      },
      {
        id: 'POL-DE-9103',
        entityName: 'Sophie Schneider (München)',
        category: 'Hausratversicherung (120m²)',
        status: 'verified',
        latency: '62ms',
        provider: 'OpenAI gpt-4o-mini',
        updatedAt: '12 mins ago',
        payload: {
          policy_id: 'VDE-HR-2026-4402',
          insured_sum: '€84,000 (Unterversicherungsverzicht)',
          annual_premium: '€144.50 / Jahr',
          additional_coverage: 'Elementarschäden (Flooding / Earthquake) Included',
          geolocation_risk: 'ZÜRS Zone 1 (Minimal flood risk)',
          underwriting_decision: 'Instant automated binding',
        },
      },
      {
        id: 'POL-DE-9102',
        entityName: 'Lukas Becker (Hamburg)',
        category: 'Berufsunfähigkeit (BU-Pilot)',
        status: 'active',
        latency: '84ms',
        provider: 'Claude Code Terminal Stack',
        updatedAt: '28 mins ago',
        payload: {
          policy_id: 'VDE-BU-2026-1189',
          monthly_annuity: '€2,000 / Monat bis Endalter 67',
          occupation: 'Senior Software Engineer (Risk Group 1+)',
          health_screening: 'AI conversational triage complete • 0 exclusions',
          medical_eval_status: 'No high-risk conditions reported',
          status: 'Binding quote issued • Awaiting e-signature',
        },
      },
      {
        id: 'POL-DE-9101',
        entityName: 'Kanzlei Müller & Partner (Frankfurt)',
        category: 'B2B Legacy Migration: Document OCR',
        status: 'queued',
        latency: '38ms',
        provider: 'Inngest Event Bus',
        updatedAt: '1 hr ago',
        payload: {
          batch_id: 'B2B-MIGRATION-BATCH-08',
          source_documents: '1,240 Legacy Paper Application Scans',
          ocr_pipeline: 'Multimodal Vision + Structured Pydantic Extraction',
          target_destination: 'PostgreSQL Core + GDV Export',
          accuracy_eval: '99.8% field extraction precision across 50-item benchmark',
        },
      },
      {
        id: 'POL-DE-9100',
        entityName: 'Dual-Insurance & Suspicious Fraud Intercept',
        category: 'Claims & Underwriting Firewall',
        status: 'flagged',
        latency: '16ms',
        provider: 'LLM Firewall Inline',
        updatedAt: '3 hrs ago',
        payload: {
          incident_id: 'SEC-FRAUD-0029',
          attack_vector: 'Double Insurance Claim on Stolen Electronics',
          detected_collision: 'Serial number collision detected in HIS database',
          action_taken: 'Underwriting auto-lock triggered • Zero policy issued',
          compliance_log: 'BaFin Section 23 Risk Registry Updated',
        },
      },
    ],
  },
};
