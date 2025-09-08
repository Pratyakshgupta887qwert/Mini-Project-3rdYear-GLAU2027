# 💳 ATM Simulation System

A mini-project ATM Simulation System that replicates real ATM functionalities—**PIN verification, Withdraw, Deposit, Balance Inquiry, PIN Change, Account Blocking**, and **Admin Monthly Reports with graphical analysis**.  
It’s designed for students and developers to learn secure banking simulations and system design concepts.

---

## 📝 Overview

This project simulates ATM operations in a safe environment, replicating core ATM functionalities and processes.  
It guides the user through typical ATM operations using a logical flow similar to real-world machines, including:

- **Start/Insert Card & Enter PIN**
- **Database PIN Verification**
- **Transaction Menu (Withdraw, Deposit, Balance Inquiry, etc.)**
- **Transaction Processing and Logging**
- **Admin Dashboard for Monthly Graphical Reports**
- **Security Features** like PIN Change and Account Blocking

The step-by-step workflow is illustrated below, helping users and developers understand the system’s logic and flow.

---

## 🔄 System Flowchart

```
          ┌───────────────────┐
          │   Start / Insert  │
          │  Card & Enter PIN │
          └─────────┬─────────┘
                    │
          ┌─────────▼─────────┐
          │  Verify PIN from  │
          │     Database      │
          └───────┬───────────┘
          Wrong PIN│   │Correct PIN
                  │   │
        ┌─────────▼   ▼──────────┐
        │   Access Denied        │
        │ (Re-enter / Exit)      │
        └────────────────────────┘

                    │
          ┌─────────▼─────────┐
          │  Show Main Menu   │
          │ 1. Withdraw       │
          │ 2. Deposit        │
          │ 3. Balance Inquiry│
          │ 4. Change PIN     │
          │ 5. Block Account  │
          │ 6. Exit           │
          └─────────┬─────────┘
                    │
   ┌────────────────┼─────────────────────────────┐
   │                │               │             │
┌──▼───┐        ┌───▼───┐      ┌───▼────┐   ┌────▼────┐
│Withdraw│      │Deposit │      │ Balance│   │Change PIN│
│Amount? │      │Amount? │      │ Inquiry│   │ New PIN? │
└───┬────┘      └───┬────┘      └───┬────┘   └────┬────┘
    │              │                 │             │
    ▼              ▼                 ▼             ▼
Check Balance   Update Balance   Show Current   Update PIN
Sufficient?     Add Amount       Balance        in Database
    │              │                 │             │
    ▼              ▼                 ▼             ▼
Update Balance  Log Transaction   Log Transaction Log Activity
Log Transaction     │                 │             │
    │              │                 │             │
    └───────┬──────┴──────┬──────────┴───────┐
            │             │                  │
       ┌────▼─────────────▼────┐       ┌─────▼─────┐
       │   Generate Receipt /  │       │ Block Acc │
       │   Daily Transaction   │       │  (Owner   │
       │        Log            │       │ Request)  │
       └───────────┬───────────┘       └─────┬─────┘
                   │                         │
          ┌────────▼────────┐        ┌───────▼───────┐
          │   Admin Access  │        │ Status: Card  │
          │  (Monthly Report│        │ Blocked       │
          │   with Graphs)  │        └───────────────┘
          └────────┬────────┘
                   │
             ┌─────▼──────┐
             │    Exit    │
             └────────────┘
```

---

## 🚀 Features

- **Secure PIN verification**
- **Withdrawal and Deposit functionality**
- **Balance Inquiry and Mini Statement**
- **PIN Change option**
- **Account Blocking system** (lost/stolen card)
- **Transaction logs and receipts**
- **Admin monthly reports with graphical analysis**

---

## 🏗️ System Architecture

- **User Interface Layer**  
  Handles user input and transaction menus

- **Application Logic Layer**  
  Processes transactions, balance updates, and logs activities

- **Database Layer**  
  Stores account details, balances, and transaction history

---

## 📁 Project Structure

```
ATM-Simulation-System/
│
├── src/                      # Source code files
│   ├── auth/                 # Authentication module
│   ├── transactions/         # Withdraw, Deposit, Balance Inquiry
│   ├── security/             # PIN change & account block
│   ├── admin/                # Monthly reports
│   └── main                  # Main entry point
│
├── docs/                     # Project report, diagrams
├── README.md                 # Documentation
├── LICENSE                   # License file
└── requirements.txt          # Dependencies (if needed)
```

---

## 📄 License

This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for details.

---

## 👥 Authors

This project was developed as a group mini-project.

> We collaborated to design, implement, and document the ATM Simulation System as part of our academic coursework.
