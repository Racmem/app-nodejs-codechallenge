export const SUBSCRIBER_FN_REF_MAP = new Map();
export const SUBSCRIBER_ERROR_FN_REF_MAP = new Map();
export const SUBSCRIBER_OBJ_REF_MAP = new Map();

export function SubscribeTo(topic) {
  return (target, propertyKey, descriptor) => {
    const originalMethod = target[propertyKey];
    SUBSCRIBER_FN_REF_MAP.set(topic, originalMethod);
    SUBSCRIBER_OBJ_REF_MAP.set(topic, target);
    return descriptor;
  };
}
export function SubscribeToErrorGroup(topic) {
  return (target, propertyKey, descriptor) => {
    const originalMethod = target[propertyKey];
    SUBSCRIBER_ERROR_FN_REF_MAP.set(topic, originalMethod);
    SUBSCRIBER_OBJ_REF_MAP.set(topic, target);
    return descriptor;
  };
}