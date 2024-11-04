int choice;
do {
    System.out.println("\n--- Border Control System Menu ---");
    System.out.println("1. Register and Manage Traveler");
    System.out.println("2. Check Travel Eligibility");
    System.out.println("3. Record Entry/Exit");
    System.out.println("4. Issue Visa/Permit");
    System.out.println("5. Flag and Inspect Traveler");
    System.out.println("6. Exit");

    System.out.print("Enter your choice: ");
    choice = scanner.nextInt();
    scanner.nextLine(); // Consume newline

    switch (choice) {
        case 1 -> registerAndManageTraveler();
        case 2 -> checkTravelEligibility();
        case 3 -> recordEntryExit();
        case 4 -> issueVisa();
        case 5 -> flagAndInspectTraveler();
        case 6 -> System.out.println("Exiting...");
        default -> System.out.println("Invalid choice. Please try again.");
    }
} while (choice != 6);
