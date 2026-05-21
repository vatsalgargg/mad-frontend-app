import 'package:supabase_flutter/supabase_flutter.dart';

void main() async {
  // Replace these with your actual keys when integrating into your Flutter app
  const supabaseUrl = 'https://ezkwxnruzpjjarpieoll.supabase.co';
  const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV6a3d4bnJ1enBqamFycGllb2xsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkzMzczNjcsImV4cCI6MjA5NDkxMzM2N30.F7Sqzrre1dovmtti51O1NMglp_nUamFPgvjl1r1zUfQ';

  await Supabase.initialize(
    url: supabaseUrl,
    anonKey: supabaseAnonKey,
  );

  // runApp(const MyApp()); // Run your Flutter app here
}

final supabase = Supabase.instance.client;
