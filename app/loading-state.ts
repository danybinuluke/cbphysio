class LoadingState {
  private hasLoaded = false;
  private loadingStartTime = 0;
  
  constructor() {
    if (typeof window !== 'undefined') {
      this.loadingStartTime = Date.now();
    }
  }
  
  shouldShowLoading(): boolean {
    if (this.hasLoaded) return false;
    
    const now = Date.now();
    const elapsed = now - this.loadingStartTime;
    
    if (elapsed > 5000) {
      this.hasLoaded = true;
      return false;
    }
    
    return true;
  }
  
  getRemainingTime(): number {
    const elapsed = Date.now() - this.loadingStartTime;
    return Math.max(0, 5000 - elapsed);
  }
  
  markAsLoaded(): void {
    this.hasLoaded = true;
  }
}

export const loadingState = new LoadingState();