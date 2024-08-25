import React, { createContext, useContext, useState, ReactNode } from "react";

interface CardContextType {
  selectedCardName: string | null;
  setSelectedCardName: (name: string | null) => void;
}

const CardContext = createContext<CardContextType | undefined>(undefined);

export const useCardContext = () => {
  const context = useContext(CardContext);
  if (!context) {
    throw new Error("useCardContext must be used within a CardProvider");
  }
  return context;
};

export const CardProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [selectedCardName, setSelectedCardName] = useState<string | null>(null);

  return (
    <CardContext.Provider value={{ selectedCardName, setSelectedCardName }}>
      {children}
    </CardContext.Provider>
  );
};
