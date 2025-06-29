// Streaming Data Processing Technologies Guide - JavaScript

// Data from the provided JSON
const technologies = [
  {
    name: "Apache Kafka",
    type: "Open Source",
    description: "Distributed streaming platform for building real-time data pipelines",
    latency: "Medium",
    throughput: "Very High",
    pros: ["High throughput", "Fault tolerant", "Large ecosystem", "Proven at scale"],
    cons: ["Complex setup", "Requires expertise", "Memory intensive"],
    use_cases: ["Event sourcing", "Log aggregation", "Real-time analytics"],
    pricing: "Infrastructure costs only",
    starting_cost: "Variable (server costs)"
  },
  {
    name: "Apache Flink",
    type: "Open Source",
    description: "Stream processing framework for real-time analytics",
    latency: "Very Low",
    throughput: "High",
    pros: ["True streaming", "Low latency", "Stateful processing", "Event time handling"],
    cons: ["Complex", "Steep learning curve", "Limited ecosystem"],
    use_cases: ["Complex event processing", "Real-time ML", "Fraud detection"],
    pricing: "Infrastructure costs only",
    starting_cost: "Variable (server costs)"
  },
  {
    name: "Apache Spark Streaming",
    type: "Open Source",
    description: "Micro-batch processing engine built on Apache Spark",
    latency: "Medium-High",
    throughput: "High",
    pros: ["Unified batch/stream", "Rich ecosystem", "ML integration", "SQL support"],
    cons: ["Higher latency", "Memory intensive", "Not true streaming"],
    use_cases: ["ETL pipelines", "ML workflows", "Complex transformations"],
    pricing: "Infrastructure costs only",
    starting_cost: "Variable (server costs)"
  },
  {
    name: "Confluent Kafka",
    type: "Managed",
    description: "Enterprise-grade managed Kafka service",
    latency: "Medium",
    throughput: "Very High",
    pros: ["Fully managed", "Enterprise features", "Schema registry", "ksqlDB"],
    cons: ["Vendor lock-in", "Higher cost", "Less control"],
    use_cases: ["Enterprise streaming", "Data integration", "Real-time analytics"],
    pricing: "Tiered (Basic/Standard/Enterprise)",
    starting_cost: "$0 (free tier) - $1,100/month"
  },
  {
    name: "Apache Pulsar",
    type: "Open Source",
    description: "Cloud-native distributed messaging and streaming platform",
    latency: "Low",
    throughput: "High",
    pros: ["Multi-tenancy", "Geo-replication", "Tiered storage", "Cloud-native"],
    cons: ["Newer technology", "Smaller community", "Complex architecture"],
    use_cases: ["Multi-tenant applications", "Global deployments", "IoT platforms"],
    pricing: "Infrastructure costs only",
    starting_cost: "Variable (server costs)"
  },
  {
    name: "AWS Kinesis",
    type: "Cloud Managed",
    description: "Fully managed streaming data service on AWS",
    latency: "Low",
    throughput: "Medium-High",
    pros: ["Serverless", "AWS integration", "Auto-scaling", "Managed service"],
    cons: ["AWS lock-in", "Limited customization", "Pricing complexity"],
    use_cases: ["AWS-based applications", "Real-time analytics", "IoT data"],
    pricing: "Pay-per-GB + processing units",
    starting_cost: "$0.08/GB + $0.04/stream/hour"
  },
  {
    name: "Azure Event Hubs",
    type: "Cloud Managed",
    description: "Managed event ingestion service on Microsoft Azure",
    latency: "Low",
    throughput: "Medium-High",
    pros: ["Azure integration", "Kafka compatibility", "Auto-scaling", "IoT focused"],
    cons: ["Azure lock-in", "Limited processing", "Complex pricing"],
    use_cases: ["Azure applications", "IoT data ingestion", "Event-driven architectures"],
    pricing: "Throughput units + events",
    starting_cost: "$0.10/hour per TU"
  },
  {
    name: "Google Cloud Dataflow",
    type: "Cloud Managed",
    description: "Serverless stream and batch processing on Google Cloud",
    latency: "Medium",
    throughput: "High",
    pros: ["Serverless", "Unified batch/stream", "Auto-scaling", "Apache Beam"],
    cons: ["GCP lock-in", "Complex pricing", "Learning curve"],
    use_cases: ["GCP applications", "ETL pipelines", "Real-time analytics"],
    pricing: "Pay-as-you-go (compute + streaming)",
    starting_cost: "Variable based on usage"
  },
  {
    name: "Estuary Flow",
    type: "Managed",
    description: "Real-time ETL and data integration platform",
    latency: "Very Low",
    throughput: "Medium-High",
    pros: ["Sub-100ms latency", "Real-time ETL", "Managed schema", "Easy setup"],
    cons: ["Newer platform", "Limited ecosystem", "Vendor dependency"],
    use_cases: ["Real-time ETL", "CDC", "Data integration"],
    pricing: "Usage-based with free tier",
    starting_cost: "Free tier available"
  }
];

const useCases = [
  {
    name: "Real-time Analytics",
    description: "Process and analyze data as it arrives for immediate insights",
    recommended: ["Apache Flink", "Confluent Kafka", "Apache Kafka"],
    requirements: ["Low latency", "High throughput", "Complex queries"]
  },
  {
    name: "ETL/CDC",
    description: "Extract, transform, and load data or capture data changes",
    recommended: ["Estuary Flow", "Confluent Kafka", "AWS Kinesis"],
    requirements: ["Data transformation", "Schema management", "Reliability"]
  },
  {
    name: "IoT Data Processing",
    description: "Handle high-volume sensor and device data",
    recommended: ["Apache Flink", "Azure Event Hubs", "Apache Pulsar"],
    requirements: ["High scale", "Device integration", "Edge processing"]
  },
  {
    name: "Log Aggregation",
    description: "Collect and process logs from distributed systems",
    recommended: ["Apache Kafka", "Confluent Kafka", "Apache Pulsar"],
    requirements: ["High throughput", "Durability", "Multiple sources"]
  },
  {
    name: "Financial Services",
    description: "Process financial transactions and market data",
    recommended: ["Apache Flink", "Apache Kafka", "Confluent Kafka"],
    requirements: ["Ultra-low latency", "Exactness", "Compliance"]
  },
  {
    name: "Fraud Detection",
    description: "Real-time detection of fraudulent activities",
    recommended: ["Apache Flink", "Apache Spark Streaming", "AWS Kinesis"],
    requirements: ["ML integration", "Pattern matching", "Real-time scoring"]
  }
];

const realWorldExamples = [
  {
    company: "Netflix",
    technology: "Apache Kafka",
    use_case: "Real-time recommendation engine and content delivery optimization",
    scale: "Billions of events per day",
    benefits: "Personalized content delivery, improved user experience"
  },
  {
    company: "Uber",
    technology: "Apache Flink",
    use_case: "Real-time pricing and driver-rider matching",
    scale: "Millions of rides daily",
    benefits: "Dynamic pricing, optimized matching, reduced wait times"
  },
  {
    company: "Spotify",
    technology: "Apache Kafka + Apache Storm",
    use_case: "Real-time music recommendation and playlist generation",
    scale: "Petabytes of listening data",
    benefits: "Personalized playlists, improved discovery"
  },
  {
    company: "Airbnb",
    technology: "Apache Spark Streaming",
    use_case: "Real-time pricing optimization and fraud detection",
    scale: "Millions of bookings",
    benefits: "Dynamic pricing, reduced fraud, better host recommendations"
  }
];

// Global state
let currentSection = 'overview';
let selectedUseCase = null;
let decisionState = {
  step: 1,
  choices: {}
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  initNavigation();
  initComparisonTable();
  initCostCalculator();
  initUseCaseSelector();
  initRealWorldExamples();
  initDecisionMatrix();
});

// Navigation functionality
function initNavigation() {
  const navButtons = document.querySelectorAll('.nav-btn');
  const sections = document.querySelectorAll('.section');

  navButtons.forEach(button => {
    button.addEventListener('click', function() {
      const targetSection = this.dataset.section;
      showSection(targetSection);
      
      // Update active nav button
      navButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // Show initial section
  showSection('overview');
  document.querySelector('[data-section="overview"]').classList.add('active');
}

function showSection(sectionId) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    section.classList.remove('active');
  });
  
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.classList.add('active');
  }
  
  currentSection = sectionId;
}

// Technology comparison functionality
function initComparisonTable() {
  const typeFilter = document.getElementById('type-filter');
  const sortCriteria = document.getElementById('sort-criteria');
  
  typeFilter.addEventListener('change', updateComparisonTable);
  sortCriteria.addEventListener('change', updateComparisonTable);
  
  updateComparisonTable();
}

function updateComparisonTable() {
  const typeFilter = document.getElementById('type-filter').value;
  const sortCriteria = document.getElementById('sort-criteria').value;
  
  let filteredTechs = technologies.filter(tech => {
    return typeFilter === 'all' || tech.type === typeFilter;
  });
  
  // Sort technologies
  filteredTechs.sort((a, b) => {
    if (sortCriteria === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortCriteria === 'type') {
      return a.type.localeCompare(b.type);
    } else if (sortCriteria === 'latency') {
      const latencyOrder = { 'Very Low': 0, 'Low': 1, 'Medium': 2, 'Medium-High': 3, 'High': 4 };
      return latencyOrder[a.latency] - latencyOrder[b.latency];
    } else if (sortCriteria === 'throughput') {
      const throughputOrder = { 'Low': 0, 'Medium': 1, 'Medium-High': 2, 'High': 3, 'Very High': 4 };
      return throughputOrder[b.throughput] - throughputOrder[a.throughput];
    }
    return 0;
  });
  
  renderComparisonTable(filteredTechs);
}

function renderComparisonTable(techs) {
  const tbody = document.querySelector('#tech-comparison-table tbody');
  tbody.innerHTML = '';
  
  techs.forEach(tech => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td><strong>${tech.name}</strong><br><small>${tech.description}</small></td>
      <td><span class="status status--info">${tech.type}</span></td>
      <td><span class="status ${getLatencyClass(tech.latency)}">${tech.latency}</span></td>
      <td><span class="status ${getThroughputClass(tech.throughput)}">${tech.throughput}</span></td>
      <td><ul class="tech-pros">${tech.pros.map(pro => `<li>${pro}</li>`).join('')}</ul></td>
      <td><ul class="tech-cons">${tech.cons.map(con => `<li>${con}</li>`).join('')}</ul></td>
      <td><strong>${tech.starting_cost}</strong></td>
    `;
    tbody.appendChild(row);
  });
}

function getLatencyClass(latency) {
  if (latency === 'Very Low' || latency === 'Low') return 'status--success';
  if (latency === 'Medium') return 'status--warning';
  return 'status--error';
}

function getThroughputClass(throughput) {
  if (throughput === 'Very High' || throughput === 'High') return 'status--success';
  if (throughput === 'Medium-High' || throughput === 'Medium') return 'status--warning';
  return 'status--error';
}

// Cost calculator functionality
function initCostCalculator() {
  const companySize = document.getElementById('company-size');
  const dataVolume = document.getElementById('data-volume');
  const dataVolumeDisplay = document.getElementById('data-volume-display');
  const latencyRequirement = document.getElementById('latency-requirement');
  
  dataVolume.addEventListener('input', function() {
    dataVolumeDisplay.textContent = `${this.value} GB`;
    updateCostEstimates();
  });
  
  companySize.addEventListener('change', updateCostEstimates);
  latencyRequirement.addEventListener('change', updateCostEstimates);
  
  updateCostEstimates();
}

function updateCostEstimates() {
  const companySize = document.getElementById('company-size').value;
  const dataVolume = parseInt(document.getElementById('data-volume').value);
  const latencyRequirement = document.getElementById('latency-requirement').value;
  
  const costBreakdown = document.getElementById('cost-breakdown');
  const estimates = calculateCosts(companySize, dataVolume, latencyRequirement);
  
  costBreakdown.innerHTML = estimates.map(estimate => `
    <div class="cost-item">
      <div class="tech-name">${estimate.name}</div>
      <div class="cost-value">${estimate.cost}</div>
    </div>
  `).join('');
}

function calculateCosts(companySize, dataVolume, latencyRequirement) {
  const baseCosts = {
    'startup': 0.5,
    'medium': 1.0,
    'large': 2.0
  };
  
  const multiplier = baseCosts[companySize];
  const dataMultiplier = Math.max(1, dataVolume / 100);
  
  return [
    { name: 'Apache Kafka (Self-hosted)', cost: `$${Math.round(500 * multiplier * dataMultiplier)}/month` },
    { name: 'Confluent Kafka', cost: `$${Math.round(1100 * multiplier * dataMultiplier)}/month` },
    { name: 'AWS Kinesis', cost: `$${Math.round(dataVolume * 0.08 * multiplier + 200)}/month` },
    { name: 'Azure Event Hubs', cost: `$${Math.round(dataVolume * 0.10 * multiplier + 150)}/month` },
    { name: 'Google Cloud Dataflow', cost: `$${Math.round(400 * multiplier * dataMultiplier)}/month` },
    { name: 'Apache Flink (Self-hosted)', cost: `$${Math.round(600 * multiplier * dataMultiplier)}/month` }
  ];
}

// Use case selector functionality
function initUseCaseSelector() {
  const useCaseGrid = document.querySelector('.use-case-grid');
  
  useCases.forEach(useCase => {
    const card = document.createElement('div');
    card.className = 'use-case-card';
    card.innerHTML = `
      <h4>${useCase.name}</h4>
      <p>${useCase.description}</p>
      <div class="requirements">
        <strong>Requirements:</strong>
        <ul>
          ${useCase.requirements.map(req => `<li>${req}</li>`).join('')}
        </ul>
      </div>
    `;
    
    card.addEventListener('click', function() {
      selectUseCase(useCase);
      document.querySelectorAll('.use-case-card').forEach(c => c.classList.remove('selected'));
      this.classList.add('selected');
    });
    
    useCaseGrid.appendChild(card);
  });
}

function selectUseCase(useCase) {
  selectedUseCase = useCase;
  showRecommendations(useCase);
}

function showRecommendations(useCase) {
  const recommendationResults = document.getElementById('recommendation-results');
  const recommendations = useCase.recommended.map(techName => {
    const tech = technologies.find(t => t.name === techName);
    return {
      name: techName,
      score: calculateSuitabilityScore(tech, useCase),
      tech: tech
    };
  }).sort((a, b) => b.score - a.score);
  
  recommendationResults.innerHTML = recommendations.map(rec => `
    <div class="recommendation-item">
      <div>
        <strong>${rec.name}</strong>
        <div><small>${rec.tech ? rec.tech.description : ''}</small></div>
      </div>
      <div class="recommendation-score ${getScoreClass(rec.score)}">
        ${rec.score}/10
      </div>
    </div>
  `).join('');
}

function calculateSuitabilityScore(tech, useCase) {
  // Simple scoring algorithm based on technology characteristics
  let score = 7; // Base score
  
  if (useCase.name === 'Real-time Analytics') {
    if (tech.latency === 'Very Low' || tech.latency === 'Low') score += 2;
    if (tech.throughput === 'Very High' || tech.throughput === 'High') score += 1;
  } else if (useCase.name === 'ETL/CDC') {
    if (tech.name.includes('Flow') || tech.name.includes('Confluent')) score += 2;
  } else if (useCase.name === 'IoT Data Processing') {
    if (tech.throughput === 'Very High' || tech.throughput === 'High') score += 2;
    if (tech.name.includes('Azure') || tech.name.includes('Pulsar')) score += 1;
  }
  
  return Math.min(10, score);
}

function getScoreClass(score) {
  if (score >= 8) return 'score-high';
  if (score >= 6) return 'score-medium';
  return 'score-low';
}

// Real-world examples functionality
function initRealWorldExamples() {
  const examplesGrid = document.querySelector('.examples-grid');
  
  realWorldExamples.forEach(example => {
    const card = document.createElement('div');
    card.className = 'example-card';
    card.innerHTML = `
      <div class="example-header">
        <h4>${example.company}</h4>
        <div class="example-tech">${example.technology}</div>
      </div>
      <div class="example-body">
        <p><strong>Use Case:</strong> ${example.use_case}</p>
        <div class="example-scale">${example.scale}</div>
        <p><strong>Benefits:</strong> ${example.benefits}</p>
      </div>
    `;
    examplesGrid.appendChild(card);
  });
}

// Decision matrix functionality
function initDecisionMatrix() {
  const decisionButtons = document.querySelectorAll('.decision-btn');
  
  decisionButtons.forEach(button => {
    button.addEventListener('click', function() {
      const choice = this.dataset.choice;
      handleDecisionChoice(choice);
    });
  });
}

function handleDecisionChoice(choice) {
  decisionState.choices[`step${decisionState.step}`] = choice;
  
  if (decisionState.step < 3) {
    // Move to next step
    document.getElementById(`step-${decisionState.step}`).classList.remove('active');
    decisionState.step++;
    document.getElementById(`step-${decisionState.step}`).classList.add('active');
  } else {
    // Show final recommendation
    showFinalRecommendation();
  }
}

function showFinalRecommendation() {
  document.getElementById(`step-${decisionState.step}`).classList.remove('active');
  
  const recommendation = generateRecommendation(decisionState.choices);
  const resultsDiv = document.getElementById('decision-results');
  const recommendationDiv = document.getElementById('final-recommendation');
  
  recommendationDiv.innerHTML = `
    <div class="final-recommendation">
      <h4>Recommended Technology: ${recommendation.technology}</h4>
      <p>${recommendation.reasoning}</p>
      <div class="recommendation-details">
        <h5>Why this recommendation?</h5>
        <ul>
          ${recommendation.details.map(detail => `<li>${detail}</li>`).join('')}
        </ul>
      </div>
    </div>
  `;
  
  resultsDiv.classList.add('active');
}

function generateRecommendation(choices) {
  const useCase = choices.step1;
  const budget = choices.step2;
  const expertise = choices.step3;
  
  let technology = 'Apache Kafka';
  let reasoning = 'Based on your requirements';
  let details = [];
  
  // Decision logic
  if (useCase === 'analytics' && budget === 'low' && expertise === 'expert') {
    technology = 'Apache Flink';
    reasoning = 'Apache Flink provides the lowest latency for real-time analytics and is cost-effective for expert teams.';
    details = [
      'True streaming with millisecond latency',
      'Free open-source solution',
      'Powerful for complex event processing',
      'Suitable for expert-level teams'
    ];
  } else if (useCase === 'etl' && budget === 'medium') {
    technology = 'Estuary Flow';
    reasoning = 'Estuary Flow specializes in real-time ETL with managed service benefits.';
    details = [
      'Purpose-built for ETL/CDC use cases',
      'Managed service reduces operational overhead',
      'Sub-100ms latency for real-time processing',
      'Good balance of features and cost'
    ];
  } else if (budget === 'high' && expertise === 'beginner') {
    technology = 'Confluent Kafka';
    reasoning = 'Confluent provides enterprise features with full management, perfect for teams getting started.';
    details = [
      'Fully managed Kafka service',
      'Enterprise support and features',
      'Reduced operational complexity',
      'Comprehensive documentation and training'
    ];
  } else if (useCase === 'iot' && budget === 'medium') {
    technology = 'Azure Event Hubs';
    reasoning = 'Azure Event Hubs is optimized for IoT scenarios with good cost-performance ratio.';
    details = [
      'Built specifically for IoT data ingestion',
      'Auto-scaling capabilities',
      'Kafka compatibility',
      'Competitive pricing for IoT workloads'
    ];
  }
  
  return { technology, reasoning, details };
}

// Utility functions
function resetDecisionMatrix() {
  decisionState = { step: 1, choices: {} };
  document.querySelectorAll('.decision-step').forEach(step => step.classList.remove('active'));
  document.getElementById('step-1').classList.add('active');
  document.getElementById('decision-results').classList.remove('active');
}