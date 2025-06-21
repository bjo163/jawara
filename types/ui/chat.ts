/**
 * LIVE CHAT WIDGET TYPES
 * ======================
 *
 * Types untuk chat system, messages, dan assistant configuration.
 */

// Chat message structure
export interface ChatMessage {
  id: number;
  text: string;
  sender: "user" | "support";
  time: string;
  avatar: string;
}

// Chat assistant information
export interface ChatAssistant {
  name: string;
  title: string;
  role: string;
  avatar: string;
  status: {
    online: boolean;
    statusText: string;
    responseTime: string;
  };
  rating: {
    score: number;
    maxScore: number;
    totalStars: number;
  };
  availability: string;
}

// Chat action buttons
export interface ChatAction {
  id: string;
  label: string;
  icon: string;
  action: "whatsapp" | "email" | "scroll";
  url?: string;
  target?: string;
  className: string;
  iconColor: string;
  hoverEffect: string;
}

// Chat widget UI configuration
export interface ChatWidgetUI {
  button: {
    size: {
      mobile: string;
      desktop: string;
    };
    position: string;
    animations: {
      hover: string;
      notification: string;
      sparkles: string;
      crown: string;
    };
    decorativeElements: {
      notification: {
        show: boolean;
        text: string;
        className: string;
      };
      sparkles: {
        show: boolean;
        className: string;
      };
      crown: {
        show: boolean;
        className: string;
      };
    };
  };
  window: {
    size: string;
    position: string;
    className: string;
    maxHeight: string;
  };
  header: {
    background: string;
    decorativeElements: {
      topRight: string;
      bottomLeft: string;
    };
  };
  messages: {
    scrollBehavior: string;
    typingDelay: {
      general: number;
      contextual: number;
    };
    userAvatar: string;
    supportAvatar: string;
  };
  floatingText: {
    show: boolean;
    text: string;
    className: string;
  };
}

// Chat behavior settings
export interface ChatBehavior {
  autoScroll: boolean;
  typingIndicator: boolean;
  responseDelay: {
    min: number;
    max: number;
  };
  fallbackResponse: string;
  maxMessages: number;
  persistChat: boolean;
}

// Complete live chat configuration
export interface LiveChatConfig {
  assistant: ChatAssistant;
  welcome: ChatMessage;
  quickReplies: string[];
  autoResponses: string[];
  contextualResponses: { [key: string]: string };
  quickActions: ChatAction[];
  ui: ChatWidgetUI;
  behavior: ChatBehavior;
  contacts: {
    [key: string]: string;
  };
}
