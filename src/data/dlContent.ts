export interface SectionContent {
  id: string;
  title: string;
  subtitle: string;
  conceptName: string;
  paragraphs: string[];
  formula?: string;
  keyConcepts: { label: string; value: string }[];
}

export const DL_SECTIONS: SectionContent[] = [
  {
    id: "home",
    title: "Deep Learning Visual Guide",
    subtitle: "A visual, step-by-step introduction to how neural networks process information and learn.",
    conceptName: "Introduction to Deep Learning",
    paragraphs: [
      "Deep Learning is a subset of machine learning inspired by the biological structure of the human brain. Instead of relying on manual feature engineering, deep learning models learn representations of data directly from raw inputs like images, audio, or text.",
      "At its core, deep learning is about stacking layers of simple mathematical operations. As data moves deeper through these layers, the network extracts increasingly abstract patterns—turning pixels into edges, edges into shapes, and shapes into recognizable objects.",
      "In this guide, we will break down the essential building blocks of neural networks, look inside their learning engines, and explore specialized architectures that power modern computer vision and sequence generation."
    ],
    keyConcepts: [
      { label: "Representation Learning", value: "Automatically extracting patterns from raw data without manual feature creation." },
      { label: "Hierarchical Features", value: "Building complex concepts out of simpler ones layer by layer." },
      { label: "Artificial Neurons", value: "Simple computational units that scale up to form deep networks." }
    ]
  },
  {
    id: "perceptron",
    title: "The Neuron & Perceptron",
    subtitle: "The fundamental computational block of artificial neural networks.",
    conceptName: "The Single-Layer Perceptron",
    formula: "y = f( \\sum (x_i \\cdot w_i) + b )",
    paragraphs: [
      "The Perceptron is the simplest form of an artificial neuron. It takes multiple inputs, multiplies each by a specific 'weight' (which dictates its importance), adds them together, and incorporates an extra 'bias' value to shift the activation threshold.",
      "Once the weighted sum is computed, it passes through an activation function. This function introduces non-linearity, determining whether and how strongly the neuron should 'fire' its output signal.",
      "Without non-linear activation functions, stacking multiple layers of neurons would just result in a single giant linear equation. Non-linearity is what allows deep networks to learn highly complex, curved decision boundaries."
    ],
    keyConcepts: [
      { label: "Inputs (x)", value: "Raw features or output signals from previous neurons." },
      { label: "Weights (w)", value: "Strengths of connections; they are adjusted as the model learns." },
      { label: "Bias (b)", value: "An offset value allowing the neuron to adjust its baseline activation." },
      { label: "Activation Function (f)", value: "Introduces non-linearity (e.g., ReLU, Sigmoid) to decide the final output." }
    ]
  },
  {
    id: "learning",
    title: "How a Network Learns",
    subtitle: "Understanding the dual engines of Deep Learning: the Forward Pass and Backpropagation.",
    conceptName: "Forward Pass & Backpropagation",
    formula: "E = \\mathcal{L}(y_{pred}, y_{true}) \\quad \\text{and} \\quad \\Delta w = -\\eta \\frac{\\partial E}{\\partial w}",
    paragraphs: [
      "A neural network learns through a continuous loop of prediction, measurement, and correction. This is accomplished in two distinct, alternating phases.",
      "First, during the Forward Pass, input data flows layer-by-layer through the network. Each node processes its inputs and passes them forward until the output layer generates a prediction. We then use a loss function to calculate how far off this prediction is from the actual target.",
      "Second, during Backpropagation, we propagate this error signal backward through the network. Using the chain rule from calculus, we calculate the gradient of the error with respect to each weight. By adjusting weights in the opposite direction of the gradient, the network slowly reduces its error step-by-step."
    ],
    keyConcepts: [
      { label: "Forward Pass", value: "Computing activations layer-by-layer to generate a final prediction." },
      { label: "Loss Function (L)", value: "Mathematical scoring of how incorrect the network's prediction is." },
      { label: "Backpropagation", value: "Tracing error gradients backward to see how each weight contributed to the mistake." },
      { label: "Gradient Descent", value: "Updating weights downward against the error curve to reach the minimum loss." }
    ]
  },
  {
    id: "cnn",
    title: "Convolutional Networks (CNN)",
    subtitle: "How computer vision models extract spatial features using sliding filters.",
    conceptName: "Convolution & Feature Extraction",
    paragraphs: [
      "Fully connected networks struggle with large images because the number of parameters explodes rapidly, and they ignore the spatial layout of pixels. Convolutional Neural Networks (CNNs) solve this by using weight sharing and spatial local receptive fields.",
      "The core operator is Convolution. A small matrix of weights called a filter (or kernel) slides across the input image. At each step, it performs a dot product with the pixel patch underneath, extracting specific spatial patterns like horizontal edges, corners, or colors.",
      "As these filter responses are stacked, they form feature maps. CNNs alternate these convolutions with pooling layers, which downsample the data to make the model more robust to minor translations, rotations, or scaling of the object."
    ],
    keyConcepts: [
      { label: "Filter / Kernel", value: "A tiny sliding weight matrix (e.g., 3x3) designed to detect a specific spatial feature." },
      { label: "Stride", value: "The step size (in pixels) the filter moves as it slides across the image." },
      { label: "Feature Map", value: "The resulting grid highlighting where the filter's feature was detected in the image." },
      { label: "Pooling", value: "Downsampling the feature map (e.g., Max Pooling) to reduce dimensions and add spatial invariance." }
    ]
  },
  {
    id: "rnn",
    title: "Recurrent Networks & LSTM",
    subtitle: "Processing sequential data and preserving memory across time steps.",
    conceptName: "Temporal Networks & Cell States",
    paragraphs: [
      "Standard neural networks assume all inputs are independent of each other. However, to process sequential data like text, time-series, or speech, a network needs a sense of memory. Recurrent Neural Networks (RNNs) solve this by looping a hidden state from one time-step to the next.",
      "Simple RNNs suffer from the 'Vanishing Gradient' problem. As sequences get longer, the error signal multiplied repeatedly backward across time either explodes or shrinks to zero, destroying long-term memory.",
      "Long Short-Term Memory (LSTM) networks solve this by introducing a dedicated 'cell state'—a horizontal conveyor belt that carries information intact. LSTMs use three specialized gates (Forget, Input, Output) to carefully regulate what to delete, what to learn, and what to output."
    ],
    keyConcepts: [
      { label: "Hidden State (h)", value: "The network's short-term memory that gets updated and passed forward at each step." },
      { label: "Cell State (C)", value: "The LSTM's long-term memory highway, carrying vital context across long time gaps." },
      { label: "Forget Gate", value: "Decides what information from the previous cell state should be discarded." },
      { label: "Input Gate", value: "Determines which new information should be added to the cell state." },
      { label: "Output Gate", value: "Selects what part of the current cell state is emitted as the active hidden state." }
    ]
  },
  {
    id: "summary",
    title: "Deep Learning Recap",
    subtitle: "A conceptual bird's-eye view of how these pieces fit together in modern AI.",
    conceptName: "Connecting the Architectures",
    paragraphs: [
      "Deep Learning has grown from the humble single-layer Perceptron into an incredibly rich family of architectures. By understanding these core concepts, you can see how today's state-of-the-art AI systems are built.",
      "We started with the individual Neuron, learning how weights and biases shape information. Stacking these neurons into dense networks creates Multi-Layer Perceptrons that learn complex relationships through the Forward Pass and Backpropagation.",
      "For sensory data, specialized architectures excel. CNNs use sliding filters to conquer spatial data (images), while RNNs and LSTMs carry hidden memories to master temporal sequences (text and audio). Together, these principles form the foundation of modern artificial intelligence."
    ],
    keyConcepts: [
      { label: "Feedforward", value: "The foundation of deep learning where signals flow sequentially without cycles." },
      { label: "Spatial Intelligence", value: "CNNs capturing local visual patterns and structures." },
      { label: "Temporal Memory", value: "LSTMs maintaining context across sequential order." },
      { label: "Backpropagation", value: "The unified mathematical engine that trains all of these diverse structures." }
    ]
  }
];
